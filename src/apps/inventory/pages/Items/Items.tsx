import { Box, Stack } from '@mantine/core';

function Items() {
  return (
    <Stack sx={{ height: '100%' }}>
      <Box>Header</Box>
      <Box sx={{ flexGrow: 1 }}>rest</Box>
    </Stack>
  );
}

export default Items;
