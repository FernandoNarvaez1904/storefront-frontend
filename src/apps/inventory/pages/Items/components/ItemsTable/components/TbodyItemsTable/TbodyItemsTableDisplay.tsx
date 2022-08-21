import { openItemDrawer } from 'apps/inventory/pages/Items/components/ItemsTable/store/updateLocal';
import { useMemo } from 'react';
import { graphql, useFragment, useLazyLoadQuery } from 'react-relay';
import relayEnvironment from 'RelayEnviroment';
import { TbodyItemsTableDisplay_AllItemFragment$key } from './__generated__/TbodyItemsTableDisplay_AllItemFragment.graphql';
import {
  ItemsTable_FilterTypes,
  TbodyItemsTableDisplay_SearchLocalStateQuery,
} from './__generated__/TbodyItemsTableDisplay_SearchLocalStateQuery.graphql';
import RowTbodyItems from './RowTbodyItems';

const allItemsFragment = graphql`
  fragment TbodyItemsTableDisplay_AllItemFragment on ItemTypeConnection {
    edges {
      node {
        id
        name
        barcode
        sku
        ...RowTbodyItems_ItemsRowFragment
      }
    }
  }
`;

const localStateQuery = graphql`
  query TbodyItemsTableDisplay_SearchLocalStateQuery {
    itemsTable_localState {
      filter {
        value
        type
      }
    }
  }
`;

type Props = {
  itemConnectionRef: TbodyItemsTableDisplay_AllItemFragment$key;
};

function TbodyItemsTableDisplay({ itemConnectionRef }: Props) {
  const itemConnection =
    useFragment<TbodyItemsTableDisplay_AllItemFragment$key>(
      allItemsFragment,
      itemConnectionRef
    );
  const localState =
    useLazyLoadQuery<TbodyItemsTableDisplay_SearchLocalStateQuery>(
      localStateQuery,
      {}
    );

  const rows = useMemo(() => {
    const localStateValue =
      localState.itemsTable_localState.filter.value.toLowerCase();
    const filterType: ItemsTable_FilterTypes =
      localState.itemsTable_localState.filter.type;
    if (filterType === '%future added value') return false;

    const filteredItems = itemConnection.edges.filter((item) => {
      const value = item.node[filterType]?.toLowerCase();
      return value?.includes(localStateValue);
    });

    return filteredItems.map((item, idx: number) => (
      <RowTbodyItems
        fragmentRef={item.node}
        idx={idx + 1}
        key={item.node.id}
        onClick={() => {
          openItemDrawer(relayEnvironment, item.node.id);
        }}
      />
    ));
  }, [
    itemConnection.edges,
    localState.itemsTable_localState.filter.value,
    localState.itemsTable_localState.filter.type,
  ]);

  return <tbody>{rows}</tbody>;
}

export default TbodyItemsTableDisplay;
