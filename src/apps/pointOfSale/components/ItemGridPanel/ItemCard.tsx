import { Box, Group, Paper, Text } from '@mantine/core';
import { graphql, useFragment } from 'react-relay';
import { ItemCard_ItemCardDataFragment$key } from './__generated__/ItemCard_ItemCardDataFragment.graphql';

type Props = {
  item: ItemCard_ItemCardDataFragment$key;
};

function ItemCard({ item }: Props) {
  const data = useFragment<ItemCard_ItemCardDataFragment$key>(
    graphql`
      fragment ItemCard_ItemCardDataFragment on ItemType {
        id
        name
        price
      }
    `,
    item
  );

  return (
    <Paper shadow="md" withBorder sx={{ width: '200px', height: '100px' }}>
      <Group style={{ justifyContent: 'center', alignContent: 'center' }}>
        <Box>
          <Text>{data.name}</Text>
          <Text>{data.price}</Text>
        </Box>
      </Group>
    </Paper>
  );
}

export default ItemCard;
