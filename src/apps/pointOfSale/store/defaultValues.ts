import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import { commitLocalUpdate } from 'relay-runtime';

export const setStoreDefaultValues = (environment: RelayModernEnvironment) => {
  commitLocalUpdate(environment, (store) => {
    // pointOfSaleConf
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

    // activeOrder
    const activeOrderRecord = store.create(
      'client:root:activeOrder',
      'ActiveOrder'
    );
    activeOrderRecord.setValue(null, 'items');

    // root
    const root = store.getRoot();
    root.setLinkedRecord(pointOfSaleConfRecord, 'pointOfSaleConf');
    root.setLinkedRecord(activeOrderRecord, 'activeOrder');
  });
};
