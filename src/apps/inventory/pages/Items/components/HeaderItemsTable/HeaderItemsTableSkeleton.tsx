import { Box, Group, Skeleton } from '@mantine/core';
import { TotalCountBadgeSkeleton } from './components/TotalCountBadge';

function HeaderItemsTableSkeleton() {
  return (
    <Group spacing="xs">
      <Box sx={{ flexGrow: 1 }}>
        <Skeleton height={29} />
      </Box>
      <Box sx={{ width: '100px' }}>
        <TotalCountBadgeSkeleton />
      </Box>
    </Group>
  );
}

export default HeaderItemsTableSkeleton;
