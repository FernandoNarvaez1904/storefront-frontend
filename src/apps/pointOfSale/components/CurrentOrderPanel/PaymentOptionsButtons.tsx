import { Button, Stack } from '@mantine/core';
import React from 'react';

function PaymentOptionsButtons() {
  return (
    <Stack spacing="xs">
      <Button fullWidth variant="outline">
        Cash
      </Button>
      <Button fullWidth color="green">
        Pay
      </Button>
    </Stack>
  );
}

export default PaymentOptionsButtons;
