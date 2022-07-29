import { Center, Group, Pagination, ScrollArea, Stack } from '@mantine/core';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { useRecoilValue } from 'recoil';
import React, { useEffect, useMemo, useState } from 'react';
import { ItemGrid_AllItemsQuery } from './__generated__/ItemGrid_AllItemsQuery.graphql';
import ItemCard from './ItemCard';
import { filterItemValue, gridType } from '../../state/Atoms';

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

type Props = {
  height: number;
  itemsQueryRef: PreloadedQuery<ItemGrid_AllItemsQuery>;
};

function ItemGrid({ height, itemsQueryRef }: Props) {
  const data = usePreloadedQuery<ItemGrid_AllItemsQuery>(
    ItemGridQuery,
    itemsQueryRef
  );

  const [totalItems, setTotalItems] = useState(0);
  const [activePage, setPage] = useState(1);
  const filterCondition = useRecoilValue(filterItemValue);
  const gridKind = useRecoilValue(gridType);

  const isImageGrid = gridKind === 'ImageGrid';
  const itemsPerPage = isImageGrid ? 18 : 20;

  const filteredItems = useMemo(
    () =>
      data.itemConnection.edges.filter((item) => {
        const propertyValue: string = item.node[filterCondition.kind] as string;
        return propertyValue.includes(filterCondition.value);
      }),
    [data, filterCondition]
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
  }, [filterCondition, setPage, filteredItems]);

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
