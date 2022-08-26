import { Box, Group, Skeleton } from '@mantine/core';

function HeaderItemsTableSkeleton() {
  return (
    <Group spacing="xs">
      <Box sx={{ flexGrow: 1 }}>
        <Skeleton height={29} />
      </Box>
      <Box sx={{ width: '100px' }}>
        <Skeleton height={25} width={100} radius="xl" />
      </Box>
    </Group>
  );
}

export default HeaderItemsTableSkeleton;
