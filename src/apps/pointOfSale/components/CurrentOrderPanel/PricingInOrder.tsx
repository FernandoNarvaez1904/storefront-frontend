import { Box, Divider, Group, Stack, Text } from '@mantine/core';
import React from 'react';

function PricingInOrder() {
  return (
    <Stack spacing={10}>
      <Divider variant="dashed" />
      <Box>
        <Group sx={{ justifyContent: 'space-between' }}>
          <Text size="sm">Subtotal</Text>
          <Text size="sm" weight="bold">
            C$45.00
          </Text>
        </Group>
      </Box>
      <Box>
        <Group sx={{ justifyContent: 'space-between' }}>
          <Text size="sm">Taxes</Text>
          <Text size="sm" weight="bold">
            C$0.00
          </Text>
        </Group>
      </Box>

      <Group sx={{ justifyContent: 'space-between' }}>
        <Text size="sm">Total</Text>
        <Text size="sm" weight="bolder">
          C$45.00
        </Text>
      </Group>
    </Stack>
  );
}

export default PricingInOrder;
