import { Stack } from '@mantine/core';
import ActionHeader from './components/ActionHeader';
import SearchItemsBar from './components/SearchItemsBar';

function Items() {
  return (
    <Stack pt="md">
      <ActionHeader />
      <SearchItemsBar />
    </Stack>
  );
}

export default Items;
