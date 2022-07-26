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
  width: number;
  height: number;
  itemsQueryRef: PreloadedQuery<ItemGrid_AllItemsQuery>;
};

function ItemGrid({ width, height, itemsQueryRef }: Props) {
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

  const [activePage, setPage] = useState(1);
  const filterCondition = useRecoilValue(filterItemValue);

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
    <Stack>
      <ScrollArea style={{ height }}>
        <Group sx={{ maxWidth: width }}>
          {getFilteredItems(
            data,
            filterCondition.value,
            filterCondition.kind,
            activePage,
            15
          )}
        </Group>
      </ScrollArea>
      <Center>
        <Pagination
          page={activePage}
          onChange={setPage}
          total={Math.ceil(data.itemConnection.totalCount / 15)}
        />
      </Center>
    </Stack>
  );
}

export default ItemGrid;
