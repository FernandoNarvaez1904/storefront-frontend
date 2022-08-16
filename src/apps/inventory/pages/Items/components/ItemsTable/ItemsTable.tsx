import { ScrollArea, Table } from '@mantine/core';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { useState } from 'react';
import { PreloadedQuery } from 'react-relay';
import TbodyItemsTable from './components/TbodyItemsTable';
import useItemTableStyles from './ItemTableStyles';

export type Props = {
  height: number | string;
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
};

function ItemsTable({ height, queryRef }: Props) {
  const { classes, cx } = useItemTableStyles();
  const [scrolled, setScrolled] = useState(false);

  return (
    <ScrollArea
      sx={{ height }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table verticalSpacing="sm" fontSize="sm" highlightOnHover>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
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
        <TbodyItemsTable queryRef={queryRef} />
      </Table>
    </ScrollArea>
  );
}

export default ItemsTable;
