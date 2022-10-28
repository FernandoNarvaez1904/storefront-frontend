import {
  booleanFilterFn,
  DataGrid,
  numberFilterFn,
  stringFilterFn,
} from 'mantine-data-grid';
import { useState } from 'react';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import { useRecoilValue } from 'recoil';
import { graphql } from 'relay-runtime';
import DefaultDrawer from '../../../../components/DefaultDrawer';
import { tableGlobalFilter } from '../../state/atoms';
import { ItemsTableItemConnectionFragment$key } from './__generated__/ItemsTableItemConnectionFragment.graphql';
import { ItemsTableQuery } from './__generated__/ItemsTableQuery.graphql';
import useItemTableStyles from './ItemsTable.styles';

const allItems = graphql`
  query ItemsTableQuery {
    ...ItemsTableItemConnectionFragment
  }
`;

const itemConnectionFragment = graphql`
  fragment ItemsTableItemConnectionFragment on Query {
    itemConnection(first: null)
      @connection(key: "ItemsTableItemConnectionFragment_itemConnection") {
      totalCount
      edges {
        node {
          id
          name
          barcode
          cost
          isActive
          sku
        }
      }
    }
  }
`;

interface ItemsTableProps {
  height: number;
}

function ItemsTable({ height }: ItemsTableProps) {
  const query = useLazyLoadQuery<ItemsTableQuery>(allItems, {});
  const data = useFragment<ItemsTableItemConnectionFragment$key>(
    itemConnectionFragment,
    query
  );
  const { classes } = useItemTableStyles();
  const dataParsed = data.itemConnection.edges.map((el) => el.node);
  const globalFilterValue = useRecoilValue(tableGlobalFilter);

  const [drawerState, setDrawerState] = useState({
    isOpen: false,
    title: '',
    id: '',
  });

  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
      filterFn: stringFilterFn,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      filterFn: stringFilterFn,
    },
    {
      accessorKey: 'barcode',
      header: 'Barcode',
      filterFn: stringFilterFn,
    },
    {
      accessorKey: 'sku',
      header: 'SKU',
      filterFn: stringFilterFn,
    },
    {
      accessorKey: 'cost',
      header: 'Cost',
      filterFn: numberFilterFn,
    },
    {
      accessorKey: 'isActive',
      header: 'Is Active',
      filterFn: booleanFilterFn,
    },
  ];

  return (
    <>
      <DataGrid
        data={dataParsed}
        columns={columns}
        height={height}
        classNames={classes}
        withPagination
        withSorting
        withFixedHeader
        highlightOnHover
        withColumnFilters
        withGlobalFilter
        initialState={{
          pagination: {
            pageIndex: 0,
            pageSize: 100,
          },
        }}
        state={{
          globalFilter: globalFilterValue,
        }}
        onRow={(row) => ({
          onClick: () => {
            setDrawerState({
              isOpen: true,
              title: row.getValue('name'),
              id: row.getValue('id'),
            });
          },
        })}
      />

      <DefaultDrawer
        isOpen={drawerState.isOpen}
        onClose={() => setDrawerState((prev) => ({ ...prev, isOpen: false }))}
        title={drawerState.title}
      >
        {drawerState.id}
      </DefaultDrawer>
    </>
  );
}

export default ItemsTable;
