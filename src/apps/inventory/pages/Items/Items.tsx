import { Box, Paper, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import ItemsHeader from './components/ItemsHeader';
import ItemsTable from './components/ItemsTable';
import ItemsTableHeader from './components/ItemsTableHeader';

function Items() {
  const { height: tableHeight, ref: refTableHeight } = useElementSize();
  return (
    <Stack sx={{ height: '100%' }}>
      <ItemsHeader />
      <Paper sx={{ flexGrow: 1 }} withBorder p="md" shadow="md">
        <Stack sx={{ height: '100%' }} spacing={0}>
          <ItemsTableHeader />
          <Box sx={{ flexGrow: 1 }} ref={refTableHeight}>
            <ItemsTable height={tableHeight} />
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default Items;
