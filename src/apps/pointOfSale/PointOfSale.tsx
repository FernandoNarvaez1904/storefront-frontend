import { Stack } from '@mantine/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { commitLocalUpdate } from 'relay-runtime';
import HeaderPOS from './components/HeaderPOS';
import FooterPOS from './components/FooterPOS';
import MainPanels from './components/MainPanels/MainPanels';
import relayEnviroment from '../../RelayEnviroment';

function PointOfSale() {
  commitLocalUpdate(relayEnviroment, (store) => {
    const pointOfSaleConfRecord = store.create(
      'pointOfSaleConf',
      'PointOfSaleConfType'
    );

    pointOfSaleConfRecord.setValue('ImageType', 'gridType');

    const gridFilterValueRecord = store.create(
      'gridFilterValue',
      'GridFilterItemValue'
    );
    gridFilterValueRecord.setValue('Name', 'gridFilterType');
    gridFilterValueRecord.setValue('', 'value');

    pointOfSaleConfRecord.setLinkedRecord(
      gridFilterValueRecord,
      'gridFilterValue'
    );

    const root = store.getRoot();
    root.setLinkedRecord(pointOfSaleConfRecord, 'pointOfSaleConf');
  });

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
