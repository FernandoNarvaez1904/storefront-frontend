import { Box, Stack } from '@mantine/core';
import ItemsHeader from './components/ItemsHeader';

function Items() {
  return (
    <Stack sx={{ height: '100%' }}>
      <ItemsHeader />
      <Box sx={{ flexGrow: 1 }}>rest</Box>
    </Stack>
  );
}

export default Items;
