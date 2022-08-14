import { Paper, Stack } from '@mantine/core';
import ItemsHeader from './components/ItemsHeader';

function Items() {
  return (
    <Stack sx={{ height: '100%' }}>
      <ItemsHeader />
      <Paper sx={{ flexGrow: 1 }} withBorder p="md" shadow="md" />
    </Stack>
  );
}

export default Items;
