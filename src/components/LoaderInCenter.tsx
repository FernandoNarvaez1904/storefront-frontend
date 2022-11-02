import { Center, Loader, Stack, Text } from '@mantine/core';
import React from 'react';

function LoaderInCenter() {
  return (
    <Center style={{ height: '100%' }}>
      <Stack align="center">
        <Loader size="xl" variant="dots" />
        <Text size="sm" weight={500}>
          Doing some magic!
        </Text>
      </Stack>
    </Center>
  );
}

export default LoaderInCenter;
