import { Group, ScrollArea } from '@mantine/core';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { ItemGrid_AllItemsQuery } from './__generated__/ItemGrid_AllItemsQuery.graphql';
import ItemCard from './ItemCard';

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
          edges {
            node {
              ...ItemCard_ItemCardDataFragment
            }
          }
        }
      }
    `,
    itemsQueryRef
  );
  return (
    <ScrollArea style={{ height }}>
      <Group sx={{ maxWidth: width }}>
        {data.itemConnection.edges.map((item) => (
          <ItemCard item={item.node} />
        ))}
      </Group>
    </ScrollArea>
  );
}

export default ItemGrid;
