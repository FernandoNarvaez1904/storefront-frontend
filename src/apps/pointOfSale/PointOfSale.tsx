import { Stack } from '@mantine/core';
import React from 'react';
import relayEnvironment from 'RelayEnviroment';
import FooterPOS from './components/FooterPOS';
import HeaderPOS from './components/HeaderPOS';
import MainPanels from './components/MainPanels';
import { setStoreDefaultValues } from './store/defaultValues';

function PointOfSale() {
  setStoreDefaultValues(relayEnvironment);
  return (
    <Stack p={10} style={{ height: '100%' }}>
      <HeaderPOS />
      <MainPanels />
      <FooterPOS />
    </Stack>
  );
}

export default PointOfSale;
