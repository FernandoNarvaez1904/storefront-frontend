import { Box, Skeleton, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { Suspense } from 'react';
import ActionHeader from './components/ActionHeader';
import ItemsTable from './components/ItemsTable';
import SearchItemsBar from './components/SearchItemsBar';

function Items() {
  const { ref, height } = useElementSize();

  return (
    <Stack pt="xs" sx={{ height: '100%' }}>
      <ActionHeader />
      <Stack mb={0} pb={0} spacing={0} sx={{ flexGrow: 1 }}>
        <SearchItemsBar />
        <Box sx={{ flexGrow: 1 }} ref={ref}>
          <Suspense fallback={<Skeleton height="100%" width="100%" />}>
            {height !== 0 && <ItemsTable height={height as number} />}
          </Suspense>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Items;
