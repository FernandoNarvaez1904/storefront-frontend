import { Group, ScrollArea } from '@mantine/core';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { ItemGrid_AllItemsQuery } from './__generated__/ItemGrid_AllItemsQuery.graphql';
import ItemCard from './ItemCard';

type Props = {
  width: number;
  height: number;
  itemsQueryRef: PreloadedQuery<ItemGrid_AllItemsQuery>;
  filterCondition: { name: string };
};

function ItemGrid({ width, height, itemsQueryRef, filterCondition }: Props) {
  const data = usePreloadedQuery<ItemGrid_AllItemsQuery>(
    graphql`
      # noinspection GraphQLUnresolvedReference
      query ItemGrid_AllItemsQuery {
        itemConnection {
          edges {
            node {
              name
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
        {data.itemConnection.edges
          .filter((item) => item.node.name?.startsWith(filterCondition.name))
          .map((item) => (
            <ItemCard item={item.node} />
          ))}
      </Group>
    </ScrollArea>
  );
}

export default ItemGrid;
