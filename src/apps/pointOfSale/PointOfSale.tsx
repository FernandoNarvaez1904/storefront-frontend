import { Grid, Stack } from '@mantine/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import HeaderPOS from './components/HeaderPOS';
import ItemGridPanel from './components/ItemGridPanel';
import CurrentOrderPanel from './components/CurrentOrderPanel';
import FooterPOS from './components/FooterPOS';

function PointOfSale() {
  return (
    <RecoilRoot>
      <Stack p={10} style={{ height: '100%' }}>
        <HeaderPOS />
        <Grid sx={{ flex: 1 }} gutter="lg">
          <Grid.Col lg={4} md={5} sm={6} xs={12}>
            <CurrentOrderPanel p={20} sx={{ height: '100%' }} />
          </Grid.Col>
          <Grid.Col lg={8} md={7} sm={6} xs={12}>
            <ItemGridPanel p={20} sx={{ height: '100%' }} />
          </Grid.Col>
        </Grid>
        <FooterPOS />
      </Stack>
    </RecoilRoot>
  );
}

export default PointOfSale;
