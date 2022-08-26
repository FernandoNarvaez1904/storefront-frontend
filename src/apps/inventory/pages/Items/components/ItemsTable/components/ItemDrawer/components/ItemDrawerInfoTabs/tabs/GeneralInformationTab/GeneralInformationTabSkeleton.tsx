import { Divider, Group, Skeleton, Stack, Text, Title } from '@mantine/core';

function TextSkeleton() {
  return <Skeleton height={20} width={150} />;
}

function GeneralInformationTabSkeleton() {
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
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            SKU:
          </Text>
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Name:
          </Text>
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Barcode:
          </Text>
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Group Name:
          </Text>
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Is Active:
          </Text>
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Is Service:
          </Text>
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Creation Date:
          </Text>
          <TextSkeleton />
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
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Vendors:
          </Text>
          <TextSkeleton />
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
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Price:
          </Text>
          <TextSkeleton />
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
          <TextSkeleton />
        </Group>
        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Stock Cost Value:
          </Text>
          <TextSkeleton />
        </Group>

        <Group grow>
          <Text color="dimmed" weight="500" size="sm">
            Stock Sell Value:
          </Text>
          <TextSkeleton />
        </Group>
      </Stack>
    </Stack>
  );
}

export default GeneralInformationTabSkeleton;
