import { openItemDrawer } from 'apps/inventory/pages/Items/components/ItemsTable/store/updateLocal';
import { useMemo } from 'react';
import { graphql, useFragment } from 'react-relay';
import relayEnvironment from 'RelayEnviroment';
import { TbodyItemsTableDisplay_AllItemFragment$key } from './__generated__/TbodyItemsTableDisplay_AllItemFragment.graphql';
import RowTbodyItems from './RowTbodyItems';

const allItemsFragment = graphql`
  fragment TbodyItemsTableDisplay_AllItemFragment on ItemTypeConnection {
    edges {
      node {
        id
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

  const rows = useMemo(
    () =>
      itemConnection.edges.map((item, idx: number) => (
        <RowTbodyItems
          fragmentRef={item.node}
          idx={idx + 1}
          key={item.node.id}
          onClick={() => {
            openItemDrawer(relayEnvironment, item.node.id);
          }}
        />
      )),
    [itemConnection.edges]
  );

  return <tbody>{rows}</tbody>;
}

export default TbodyItemsTableDisplay;
