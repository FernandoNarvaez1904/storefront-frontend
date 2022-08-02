import { commitLocalUpdate } from 'relay-runtime';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';

export const setStoreDefaultValues = (environment: RelayModernEnvironment) => {
  commitLocalUpdate(environment, (store) => {
    // pointOfSaleConf
    const pointOfSaleConfRecordId = 'client:root:pointOfSaleConf';
    let pointOfSaleConfRecord = store.get(pointOfSaleConfRecordId);
    if (pointOfSaleConfRecord === null || pointOfSaleConfRecord === undefined) {
      pointOfSaleConfRecord = store.create(
        pointOfSaleConfRecordId,
        'PointOfSaleConfType'
      );
    }

    pointOfSaleConfRecord.setValue('ImageGrid', 'gridType');

    // pointOfSaleConf:gridFilterValue
    const gridFilterValueRecordId =
      'client:root:pointOfSaleConf:gridFilterValue';
    let gridFilterValueRecord = store.get(gridFilterValueRecordId);
    if (gridFilterValueRecord === null || gridFilterValueRecord === undefined) {
      gridFilterValueRecord = store.create(
        gridFilterValueRecordId,
        'GridFilterItemValue'
      );
    }

    gridFilterValueRecord.setValue('name', 'gridFilterType');
    gridFilterValueRecord.setValue('', 'value');

    pointOfSaleConfRecord.setLinkedRecord(
      gridFilterValueRecord,
      'gridFilterValue'
    );

    // activeOrder
    const activeOrderRecordId = 'client:root:activeOrder';
    let activeOrderRecord = store.get(activeOrderRecordId);
    if (activeOrderRecord === null || activeOrderRecord === undefined) {
      activeOrderRecord = store.create(activeOrderRecordId, 'ActiveOrder');
    }

    activeOrderRecord.setValue(null, 'items');

    // root
    const root = store.getRoot();
    root.setLinkedRecord(pointOfSaleConfRecord, 'pointOfSaleConf');
    root.setLinkedRecord(activeOrderRecord, 'activeOrder');
  });
};
