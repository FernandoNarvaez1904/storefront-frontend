import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import { commitLocalUpdate } from 'relay-runtime';

export const setStoreDefaultValues = (environment: RelayModernEnvironment) => {
  commitLocalUpdate(environment, (store) => {
    const pointOfSaleConfRecord = store.create(
      'client:root:pointOfSaleConf',
      'PointOfSaleConfType'
    );

    pointOfSaleConfRecord.setValue('ImageGrid', 'gridType');

    const gridFilterValueRecord = store.create(
      'client:root:pointOfSaleConf:gridFilterValue',
      'GridFilterItemValue'
    );
    gridFilterValueRecord.setValue('name', 'gridFilterType');
    gridFilterValueRecord.setValue('', 'value');

    pointOfSaleConfRecord.setLinkedRecord(
      gridFilterValueRecord,
      'gridFilterValue'
    );

    const root = store.getRoot();
    root.setLinkedRecord(pointOfSaleConfRecord, 'pointOfSaleConf');
  });
};
