import { Center, Group, Pagination, ScrollArea, Stack } from '@mantine/core';
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
} from 'react-relay';
import React, { useEffect, useMemo, useState } from 'react';
import { ItemGrid_AllItemsQuery } from './__generated__/ItemGrid_AllItemsQuery.graphql';
import ItemCard from './ItemCard';
import { ItemGrid_ConfFragment$key } from './__generated__/ItemGrid_ConfFragment.graphql';

const ItemGridQuery = graphql`
  query ItemGrid_AllItemsQuery {
    itemConnection {
      totalCount
      edges {
        node {
          id
          name
          barcode
          sku
          ...ItemCard_ItemCardDataFragment
        }
      }
    }
  }
`;

const dataConf = graphql`
  fragment ItemGrid_ConfFragment on PointOfSaleConfType {
    gridType
    gridFilterValue {
      gridFilterType
      value
    }
  }
`;

type Props = {
  height: number;
  itemsQueryRef: PreloadedQuery<ItemGrid_AllItemsQuery>;
  confFragmentRef: ItemGrid_ConfFragment$key;
};

function ItemGrid({ height, itemsQueryRef, confFragmentRef }: Props) {
  const data = usePreloadedQuery<ItemGrid_AllItemsQuery>(
    ItemGridQuery,
    itemsQueryRef
  );

  const dataConfig = useFragment<ItemGrid_ConfFragment$key>(
    dataConf,
    confFragmentRef
  );

  const [totalItems, setTotalItems] = useState(0);
  const [activePage, setPage] = useState(1);

  const isImageGrid = dataConfig.gridType === 'ImageGrid';
  const itemsPerPage = isImageGrid ? 18 : 20;

  const filteredItems = useMemo(
    () =>
      data.itemConnection.edges.filter((item) => {
        if (dataConfig.gridFilterValue.gridFilterType === '%future added value')
          return null;
        const propertyValue: string = item.node[
          dataConfig.gridFilterValue.gridFilterType
        ] as string;
        return propertyValue.includes(dataConfig.gridFilterValue.value);
      }),
    [data, dataConfig.gridFilterValue]
  );

  const paginatedFilteredItems = useMemo(
    () =>
      filteredItems.slice(
        (activePage - 1) * itemsPerPage,
        activePage * itemsPerPage
      ),
    [activePage, itemsPerPage, filteredItems]
  );

  // Resetting pagination when the search bar is used
  useEffect(() => {
    setPage(1);
    setTotalItems(filteredItems.length);
  }, [setPage, filteredItems]);

  return (
    <Stack sx={{ height, justifyContent: 'space-between' }}>
      <ScrollArea>
        <Group>
          {paginatedFilteredItems.map((item) => (
            <ItemCard
              item={item.node}
              key={item.node.id}
              width={isImageGrid ? 280 : 210}
              hasImage={isImageGrid}
              height={100}
            />
          ))}
        </Group>
      </ScrollArea>

      <Center>
        <Pagination
          page={activePage}
          onChange={setPage}
          total={Math.ceil(totalItems / itemsPerPage)}
          size="md"
          withEdges
        />
      </Center>
    </Stack>
  );
}

export default ItemGrid;
