import { Group, ScrollArea } from '@mantine/core';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { useRecoilValue } from 'recoil';
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
  const filterCondition = useRecoilValue(filterItemValue);

  const getFilteredItems = (
    itemQuery: ItemGrid_AllItemsQuery$data,
    filterText: string,
    filterType: 'barcode' | 'name' | 'sku'
  ) => {
    const filteredItems = itemQuery.itemConnection.edges.filter((item) => {
      const propertyValue: string = item.node[filterType] as string;
      return propertyValue.includes(filterText);
    });
    return filteredItems.map((item) => (
      <ItemCard item={item.node} key={item.node.id} />
    ));
  };

  return (
    <ScrollArea style={{ height }}>
      <Group sx={{ maxWidth: width }}>
        {getFilteredItems(data, filterCondition.value, filterCondition.kind)}
      </Group>
    </ScrollArea>
  );
}

export default ItemGrid;
