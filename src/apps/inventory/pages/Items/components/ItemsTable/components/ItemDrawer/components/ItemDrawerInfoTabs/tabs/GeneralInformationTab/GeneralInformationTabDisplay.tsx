import { Divider, Group, Stack, Text, Title } from '@mantine/core';
import ItemDrawerLoader_itemQueryGraphql, {
  ItemDrawerLoader_itemQuery,
} from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/__generated__/ItemDrawerLoader_itemQuery.graphql';
import { GeneralInformationTabDisplay_itemFragment$key } from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/components/ItemDrawerInfoTabs/tabs/GeneralInformationTab/__generated__/GeneralInformationTabDisplay_itemFragment.graphql';
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
} from 'react-relay';

const itemFragment = graphql`
  fragment GeneralInformationTabDisplay_itemFragment on ItemType {
    id
    sku
    name
    cost
    price
    markup
    barcode
    isActive
    isService
    versionId
    creationDate
    currentStock
  }
`;

export type GeneralInformationTabDisplayProps = {
  queryRef: PreloadedQuery<ItemDrawerLoader_itemQuery>;
};

function GeneralInformationTabDisplay({
  queryRef,
}: GeneralInformationTabDisplayProps) {
  const data = usePreloadedQuery(ItemDrawerLoader_itemQueryGraphql, queryRef);
  const item = useFragment<GeneralInformationTabDisplay_itemFragment$key>(
    itemFragment,
    data.item
  );

  return (
    <Stack spacing="xl" sx={{ height: '100%' }} mt="xs">
      <Stack spacing="xs">
        <Stack spacing={0}>
          <Title order={4}>General Information</Title>
          <Divider />
        </Stack>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            ID:
          </Text>
          <Text size="sm">{item.id}</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            SKU:
          </Text>
          <Text size="sm">{item.sku}</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Name:
          </Text>
          <Text size="sm">{item.name}</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Barcode:
          </Text>
          <Text size="sm">{item.barcode}</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Group Name:
          </Text>
          <Text size="sm">root</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Is Active:
          </Text>
          <Text size="sm">{item.isActive ? 'True' : 'False'}</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Is Service:
          </Text>
          <Text size="sm">{item.isService ? 'True' : 'False'}</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Creation Date:
          </Text>
          <Text size="sm">
            <>{new Date(item.creationDate).toLocaleDateString()}</>
          </Text>
        </Group>
      </Stack>

      <Stack spacing="xs">
        <Stack spacing={0}>
          <Title order={4}>Purchases Information</Title>
          <Divider />
        </Stack>
        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Cost:
          </Text>
          <Text size="sm">C${item.cost}</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Vendors:
          </Text>
          <Text size="sm" color="dimmed">
            No vendors specified
          </Text>
        </Group>
      </Stack>

      <Stack spacing="xs">
        <Stack spacing={0}>
          <Title order={4}>Selling Information</Title>
          <Divider />
        </Stack>
        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Markup:
          </Text>
          <Text size="sm">{item.markup}%</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Price:
          </Text>
          <Text size="sm">C${item.price}</Text>
        </Group>
      </Stack>

      <Stack spacing="xs">
        <Stack spacing={0}>
          <Title order={4}>Inventory Information</Title>
          <Divider />
        </Stack>
        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Stock:
          </Text>
          <Text size="sm">{item.currentStock}</Text>
        </Group>
        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Stock Cost Value:
          </Text>
          <Text size="sm">C${item.currentStock * item.cost}</Text>
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Stock Sell Value:
          </Text>
          <Text size="sm">
            C${item.currentStock * (item.price === null ? 0 : item.price)}
          </Text>
        </Group>
      </Stack>
    </Stack>
  );
}

export default GeneralInformationTabDisplay;
