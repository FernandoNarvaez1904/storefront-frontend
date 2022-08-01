import { Paper, Stack } from '@mantine/core';
import React from 'react';
import HeaderCurrentOrder from './HeaderCurrentOrder';
import ItemStack from './ItemStack';
import PaymentOptionsButtons from './PaymentOptionsButtons';
import PricingInOrder from './PricingInOrder';

function CurrentOrderPanel() {
  return (
    <Paper withBorder shadow="xl" sx={{ height: '100%' }} p="lg">
      <Stack sx={{ height: '100%' }} spacing="xs">
        <HeaderCurrentOrder />
        <ItemStack />
        <PricingInOrder />
        <PaymentOptionsButtons />
      </Stack>
    </Paper>
  );
}

export default CurrentOrderPanel;
