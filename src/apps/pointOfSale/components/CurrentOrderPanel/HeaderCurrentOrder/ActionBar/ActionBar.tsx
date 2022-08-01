import { Box, Button, Divider, Group } from '@mantine/core';
import React from 'react';

function ActionBar() {
  return (
    <Box>
      <Group grow spacing="xs">
        <Button size="sm" variant="outline">
          Modify
        </Button>
        <Button size="sm" variant="outline">
          Orders
        </Button>
        <Button size="sm" variant="outline">
          Lock
        </Button>
        <Button size="sm" variant="outline">
          Trash
        </Button>
      </Group>
      <Divider my="xs" variant="dashed" />
    </Box>
  );
}

export default ActionBar;
