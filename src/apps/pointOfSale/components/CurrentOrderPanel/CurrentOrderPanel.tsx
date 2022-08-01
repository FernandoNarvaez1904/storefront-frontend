import React from 'react';
import { Paper, Stack } from '@mantine/core';
import OrderTitle from './OrderTitle';
import PricingInOrder from './PricingInOrder';
import ItemStack from './ItemStack';
import ActionBar from './ActionBar';
import PaymentOptionsButtons from './PaymentOptionsButtons';

function CurrentOrderPanel() {
  return (
    <Paper withBorder shadow="xl" sx={{ height: '100%' }} p="lg">
      <Stack sx={{ height: '100%' }} spacing="xs">
        <OrderTitle />
        <ActionBar />
        <ItemStack />
        <PricingInOrder />
        <PaymentOptionsButtons />
      </Stack>
    </Paper>
  );
}

export default CurrentOrderPanel;
