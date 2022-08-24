import { openItemDrawer } from 'apps/inventory/pages/Items/components/ItemsTable/store/updateLocal';
import { itemsTableFilterAtom } from 'apps/inventory/pages/Items/state/atoms';
import { useMemo } from 'react';
import { graphql, useFragment } from 'react-relay';
import { useRecoilValue } from 'recoil';
import relayEnvironment from 'RelayEnviroment';
import { TbodyItemsTableDisplay_AllItemFragment$key } from './__generated__/TbodyItemsTableDisplay_AllItemFragment.graphql';
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

type Props = {
  itemConnectionRef: TbodyItemsTableDisplay_AllItemFragment$key;
};

function TbodyItemsTableDisplay({ itemConnectionRef }: Props) {
  const itemConnection =
    useFragment<TbodyItemsTableDisplay_AllItemFragment$key>(
      allItemsFragment,
      itemConnectionRef
    );

  const itemsTableFilter = useRecoilValue(itemsTableFilterAtom);

  const rows = useMemo(() => {
    const localStateValue = itemsTableFilter.value.toLowerCase();
    const filterType = itemsTableFilter.type;

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
  }, [itemConnection.edges, itemsTableFilter]);

  return <tbody>{rows}</tbody>;
}

export default TbodyItemsTableDisplay;
