import React from 'react';
import { Stack } from '@mantine/core';
import HeaderPOS from './components/HeaderPOS';
import MainPanels from './components/MainPanels';
import FooterPOS from './components/FooterPOS';
import { setStoreDefaultValues } from './store/defaultValues';
import relayEnvironment from '../../RelayEnviroment';

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
