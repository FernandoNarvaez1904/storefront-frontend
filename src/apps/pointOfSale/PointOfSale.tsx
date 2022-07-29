import { Stack } from '@mantine/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import HeaderPOS from './components/HeaderPOS';
import FooterPOS from './components/FooterPOS';
import MainPanels from './components/MainPanels/MainPanels';

function PointOfSale() {
  return (
    <RecoilRoot>
      <Stack p={10} style={{ height: '100%' }}>
        <HeaderPOS />
        <MainPanels />
        <FooterPOS />
      </Stack>
    </RecoilRoot>
  );
}

export default PointOfSale;
