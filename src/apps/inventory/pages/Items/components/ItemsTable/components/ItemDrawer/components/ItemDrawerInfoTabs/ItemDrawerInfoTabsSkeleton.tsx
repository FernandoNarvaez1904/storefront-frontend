import { Skeleton, Stack } from '@mantine/core';

function ItemDrawerInfoTabsSkeleton() {
  return (
    <Stack sx={{ height: '100%' }}>
      <Skeleton height={39} width="100%" />
      <Skeleton sx={{ flexGrow: 1 }} width="100%" />
    </Stack>
  );
}

export default ItemDrawerInfoTabsSkeleton;
