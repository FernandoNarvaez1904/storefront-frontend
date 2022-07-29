import React from 'react';
import { Paper, Stack } from '@mantine/core';
import OrderTitle from './OrderTitle';
import PricingInOrder from './PricingInOrder';
import ProductStack from './ProductStack';
import ActionBar from './ActionBar';
import PaymentOptionsButtons from './PaymentOptionsButtons';

function CurrentOrderPanel() {
  return (
    <Paper withBorder shadow="xl" sx={{ height: '100%' }} p="lg">
      <Stack sx={{ height: '100%' }} spacing="xs">
        <OrderTitle />
        <ActionBar />
        <ProductStack />
        <PricingInOrder />
        <PaymentOptionsButtons />
      </Stack>
    </Paper>
  );
}

export default CurrentOrderPanel;
