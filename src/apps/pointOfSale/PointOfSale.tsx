import { Group, Stack } from '@mantine/core';
import React from 'react';
import HeaderPOS from './components/HeaderPOS';
import ProductGridPanel from './components/ProductGridPanel';
import CurrentOrderPanel from './components/CurrentOrderPanel';
import FooterPOS from './components/FooterPOS';

function PointOfSale() {
  return (
    <Stack p={5} style={{ height: '100%' }}>
      <HeaderPOS />
      <Group sx={{ flexGrow: 1 }}>
        <ProductGridPanel />
        <CurrentOrderPanel />
      </Group>
      <FooterPOS />
    </Stack>
  );
}

export default PointOfSale;
