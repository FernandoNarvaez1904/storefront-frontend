import { Stack } from '@mantine/core';
import React from 'react';
import PosRelayRootLoader from './components/PosRelayRootLoader';
import { setStoreDefaultValues } from './store/defaultValues';
import relayEnvironment from '../../RelayEnviroment';

function PointOfSale() {
  setStoreDefaultValues(relayEnvironment);
  return (
    <Stack p={10} style={{ height: '100%' }}>
      <PosRelayRootLoader />
    </Stack>
  );
}

export default PointOfSale;
