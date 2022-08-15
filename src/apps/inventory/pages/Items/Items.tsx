import { Box, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import ItemsHeader from './components/ItemsHeader';
import ItemsTable from './components/ItemsTable';
import ItemsTableHeader from './components/ItemsTableHeader';

function Items() {
  const { height: tableHeight, ref: refTableHeight } = useElementSize();
  return (
    <Stack sx={{ height: '100%' }} p="xs">
      <ItemsHeader />
      <Stack sx={{ height: '100%' }} spacing={0}>
        <ItemsTableHeader />
        <Box sx={{ flexGrow: 1 }} ref={refTableHeight}>
          <ItemsTable height={tableHeight} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Items;
