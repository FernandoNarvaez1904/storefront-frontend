import { Center, Group, Pagination, ScrollArea, Stack } from '@mantine/core';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { useRecoilValue } from 'recoil';
import React, { useEffect, useState } from 'react';
import {
  ItemGrid_AllItemsQuery,
  ItemGrid_AllItemsQuery$data,
} from './__generated__/ItemGrid_AllItemsQuery.graphql';
import ItemCard from './ItemCard';
import { filterItemValue } from '../../state/Atoms';

type Props = {
  height: number;
  itemsQueryRef: PreloadedQuery<ItemGrid_AllItemsQuery>;
};

function ItemGrid({ height, itemsQueryRef }: Props) {
  const data = usePreloadedQuery<ItemGrid_AllItemsQuery>(
    graphql`
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
    `,
    itemsQueryRef
  );
  const ITEMS_PER_PAGE = 18;

  const [activePage, setPage] = useState(1);
  const filterCondition = useRecoilValue(filterItemValue);

  // Resetting activePage when the search bar is used
  useEffect(() => {
    setPage(1);
  }, [filterCondition, setPage]);

  const getFilteredItems = (
    itemQuery: ItemGrid_AllItemsQuery$data,
    filterText: string,
    filterType: 'barcode' | 'name' | 'sku',
    page: number,
    paginationSize: number
  ) => {
    const filteredItems = itemQuery.itemConnection.edges
      .filter((item) => {
        const propertyValue: string = item.node[filterType] as string;
        return propertyValue.includes(filterText);
      })
      .slice((page - 1) * paginationSize, page * paginationSize);

    return filteredItems.map((item) => (
      <ItemCard item={item.node} key={item.node.id} />
    ));
  };

  return (
    <Stack sx={{ height, justifyContent: 'space-between' }}>
      <ScrollArea>
        <Group sx={{ maxWidth: '100%' }}>
          {getFilteredItems(
            data,
            filterCondition.value,
            filterCondition.kind,
            activePage,
            ITEMS_PER_PAGE
          )}
        </Group>
      </ScrollArea>
      <Center>
        <Pagination
          page={activePage}
          onChange={setPage}
          total={Math.ceil(data.itemConnection.totalCount / ITEMS_PER_PAGE)}
          size="md"
          withEdges
        />
      </Center>
    </Stack>
  );
}

export default ItemGrid;
