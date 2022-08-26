import { ScrollArea, Table } from '@mantine/core';
import ItemsLoader_ItemsPageQueryGraphql, {
  ItemsLoader_ItemsPageQuery,
} from 'apps/inventory/pages/Items/__generated__/ItemsLoader_ItemsPageQuery.graphql';
import {
  itemDrawerStateAtom,
  itemsTableFilterAtom,
} from 'apps/inventory/pages/Items/state/atoms';
import { useMemo, useState } from 'react';
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
} from 'react-relay';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ItemsTableContentDisplay_AllItemFragment$key } from './__generated__/ItemsTableContentDisplay_AllItemFragment.graphql';
import useItemsTableContentStyles from './ItemTableStylesContent';
import RowTbodyItems from './RowTbodyItems';

const allItemsFragment = graphql`
  fragment ItemsTableContentDisplay_AllItemFragment on ItemTypeConnection {
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

export type ItemsTableContentDisplayProps = {
  height: number | string;
  queryRef: PreloadedQuery<ItemsLoader_ItemsPageQuery>;
};

function ItemsTableContentDisplay({
  height,
  queryRef,
}: ItemsTableContentDisplayProps) {
  const queryData = usePreloadedQuery<ItemsLoader_ItemsPageQuery>(
    ItemsLoader_ItemsPageQueryGraphql,
    queryRef
  );
  const itemConnection =
    useFragment<ItemsTableContentDisplay_AllItemFragment$key>(
      allItemsFragment,
      queryData.itemConnection
    );

  const { classes, cx } = useItemsTableContentStyles();
  const [isTableScrolled, setIsTableScrolled] = useState(false);

  const itemsTableFilter = useRecoilValue(itemsTableFilterAtom);
  const setItemDrawerState = useSetRecoilState(itemDrawerStateAtom);

  const rows = useMemo(() => {
    const filterText = itemsTableFilter.value.toLowerCase();
    const filterType = itemsTableFilter.type;

    const filteredItems = itemConnection.edges.filter((item) => {
      const value = item.node[filterType]?.toLowerCase();
      return value?.includes(filterText);
    });

    return filteredItems.map((item, idx: number) => (
      <RowTbodyItems
        fragmentRef={item.node}
        idx={idx + 1}
        key={item.node.id}
        onClick={() => {
          setItemDrawerState((prev) => ({
              ...prev,
              isOpened: true,
              currentItem: item.node.id,
            }));
        }}
      />
    ));
  }, [itemConnection.edges, itemsTableFilter, setItemDrawerState]);

  return (
    <ScrollArea
      sx={{ height }}
      onScrollPositionChange={(position) =>
        setIsTableScrolled(position.y !== 0)
      }
    >
      <Table verticalSpacing="sm" fontSize="sm" highlightOnHover>
        <thead
          className={cx(classes.header, {
            [classes.scrolled]: isTableScrolled,
          })}
        >
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Cost</th>
            <th>Markup</th>
            <th>Sell Price</th>
            <th>Is Service</th>
            <th>Is Active</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default ItemsTableContentDisplay;
