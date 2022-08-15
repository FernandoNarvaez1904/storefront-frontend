import { Paper, Stack } from '@mantine/core';
import ItemsHeader from './components/ItemsHeader';
import ItemsTable from './components/ItemsTable';

function Items() {
  return (
    <Stack sx={{ height: '100%' }}>
      <ItemsHeader />
      <Paper sx={{ flexGrow: 1 }} withBorder p="md" shadow="md">
        <ItemsTable />
      </Paper>
    </Stack>
  );
}

export default Items;
