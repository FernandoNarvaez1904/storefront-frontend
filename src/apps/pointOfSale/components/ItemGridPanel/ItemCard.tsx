import {
  Group,
  Image,
  Paper,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { graphql, useFragment } from 'react-relay';
import { ItemCard_ItemCardDataFragment$key } from './__generated__/ItemCard_ItemCardDataFragment.graphql';

const ItemCardFragment = graphql`
  fragment ItemCard_ItemCardDataFragment on ItemType {
    id
    name
    price
    currentStock
  }
`;
type Props = {
  item: ItemCard_ItemCardDataFragment$key;
  width: number;
  height: number;
  hasImage: boolean;
};

function ItemCard({ item, width, height, hasImage = false }: Props) {
  const data = useFragment<ItemCard_ItemCardDataFragment$key>(
    ItemCardFragment,
    item
  );

  const theme = useMantineTheme();

  return (
    <Paper shadow="md" withBorder sx={{ width, height }}>
      <Group spacing={0}>
        {hasImage && (
          <Image
            height={100}
            width="auto"
            withPlaceholder
            src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2334&q=80"
            radius="xs"
          />
        )}

        <Stack
          spacing="sm"
          sx={{ flexGrow: 1, textAlign: 'center' }}
          px={10}
          pb={3}
        >
          <Group spacing={0} sx={{ justifyContent: 'space-between' }}>
            {data.currentStock ? (
              <Text size="xs" color={theme.colors.teal[9]}>
                In Stock
              </Text>
            ) : (
              <Text size="xs" color={theme.colors.red[9]}>
                Out of Stock
              </Text>
            )}

            <Text size="xs" color="dimmed">
              Category
            </Text>
          </Group>
          <Text sx={{ wordWrap: 'break-word' }}>{data.name}</Text>
          <Text size="sm">C${data.price?.toFixed(2)}</Text>
        </Stack>
      </Group>
    </Paper>
  );
}

export default ItemCard;
