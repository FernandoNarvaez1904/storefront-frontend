import { Group, Text, useMantineTheme } from '@mantine/core';
import React from 'react';

function OrderTitle() {
  const theme = useMantineTheme();

  return (
    <Group
      sx={{
        backgroundColor: theme.colors.blue[6],
        justifyContent: 'space-between',
        borderRadius: '5px',
        color: 'white',
      }}
      py={2}
      px="xs"
    >
      <Text weight="bold" size="sm">
        #1904
      </Text>
      <Text weight="bold" size="sm">
        Client Name
      </Text>
      <Text weight="bold" size="sm">
        56
      </Text>
    </Group>
  );
}

export default OrderTitle;
