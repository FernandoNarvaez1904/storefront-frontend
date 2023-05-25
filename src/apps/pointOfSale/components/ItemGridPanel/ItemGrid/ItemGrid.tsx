import { Center, Group, Pagination, ScrollArea, Stack } from '@mantine/core';
import React, { useEffect, useMemo, useState } from 'react';
import {
  graphql,
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from 'react-relay';
import ItemCard from '../ItemCard';
import { ItemGrid_AllItemsQuery } from './__generated__/ItemGrid_AllItemsQuery.graphql';
import { ItemGrid_ConfQuery } from './__generated__/ItemGrid_ConfQuery.graphql';

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

const confQuery = graphql`
  query ItemGrid_ConfQuery {
    pointOfSaleConf {
      gridType
      gridFilterValue {
        gridFilterType
        value
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

  const dataC = useLazyLoadQuery<ItemGrid_ConfQuery>(confQuery, {});
  const dataConf = dataC.pointOfSaleConf;

  const [activePage, setPage] = useState(1);

  const isImageGrid = dataConf.gridType === 'ImageGrid';
  const itemsPerPage = isImageGrid ? 18 : 20;

  const filteredItems = useMemo(
    () =>
      data.itemConnection.edges.filter((item) => {
        if (dataConf.gridFilterValue.gridFilterType === '%future added value')
          return null;
        const propertyValue: string = item.node[
          dataConf.gridFilterValue.gridFilterType
        ] as string;
        return propertyValue.includes(dataConf.gridFilterValue.value);
      }),
    [data, dataConf]
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
  // It causes double re-rendering when writing in search bar
  useEffect(() => {
    setPage(1);
  }, [setPage, dataConf.gridFilterValue.value]);

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
          total={Math.ceil(filteredItems.length / itemsPerPage)}
          size="md"
          withEdges
        />
      </Center>
    </Stack>
  );
}

export default ItemGrid;
