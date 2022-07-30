import { Stack } from '@mantine/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import PosRelayRootLoader from './components/PosRelayRootLoader';
import { setStoreDefaultValues } from './store/defaultValues';
import relayEnvironment from '../../RelayEnviroment';

function PointOfSale() {
  setStoreDefaultValues(relayEnvironment);
  return (
    <RecoilRoot>
      <Stack p={10} style={{ height: '100%' }}>
        <PosRelayRootLoader />
      </Stack>
    </RecoilRoot>
  );
}

export default PointOfSale;
