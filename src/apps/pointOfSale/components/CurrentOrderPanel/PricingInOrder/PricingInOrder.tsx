import { Box, Divider, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import usePricingInOrderStyles from './PricingInOrderStyles';

function PricingInOrder() {
  const { classes } = usePricingInOrderStyles();
  return (
    <Stack spacing={10}>
      <Divider variant="dashed" />
      <Box>
        <Group className={classes.priceRow}>
          <Text size="sm">Subtotal</Text>
          <Text size="sm" weight="bold">
            C$45.00
          </Text>
        </Group>
      </Box>
      <Box>
        <Group className={classes.priceRow}>
          <Text size="sm">Taxes</Text>
          <Text size="sm" weight="bold">
            C$0.00
          </Text>
        </Group>
      </Box>

      <Group className={classes.priceRow}>
        <Text size="sm">Total</Text>
        <Text size="sm" weight="bolder">
          C$45.00
        </Text>
      </Group>
    </Stack>
  );
}

export default PricingInOrder;
