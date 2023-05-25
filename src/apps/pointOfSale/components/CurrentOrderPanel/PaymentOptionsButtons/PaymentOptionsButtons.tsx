import { Button, Stack } from '@mantine/core';
import React from 'react';
import { clearOrder } from '../../../store/updateLocal';
import relayEnviroment from '../../../../../RelayEnviroment';

function PaymentOptionsButtons() {
  return (
    <Stack spacing="xs">
      <Button
        fullWidth
        color="green"
        onClick={() => clearOrder(relayEnviroment)}
      >
        Pay
      </Button>
    </Stack>
  );
}

export default PaymentOptionsButtons;
