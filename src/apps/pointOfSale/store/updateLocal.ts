import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import { commitLocalUpdate, RecordProxy } from 'relay-runtime';

export const updateGridTypeConf = (
  environment: RelayModernEnvironment,
  val: 'TextGrid' | 'ImageGrid'
) => {
  commitLocalUpdate(environment, (store) => {
    const confRecord = store.get('client:root:pointOfSaleConf');
    confRecord?.setValue(val, 'gridType');
  });
};

export const updateGridFilterItem = (
  environment: RelayModernEnvironment,
  val: {
    kind: 'name' | 'barcode' | 'sku' | '%future added value';
    value: string;
  }
) => {
  commitLocalUpdate(environment, (store) => {
    const confRecord = store.get('client:root:pointOfSaleConf:gridFilterValue');
    confRecord?.setValue(val.kind, 'gridFilterType');
    confRecord?.setValue(val.value, 'value');
  });
};

export const addItemToActiveOrder = (
  environment: RelayModernEnvironment,
  itemId: string
) => {
  commitLocalUpdate(environment, (store) => {
    const item = store.get(itemId) as RecordProxy<{}>;

    const activeOrder = store.get('client:root:activeOrder');
    const activeItems = activeOrder?.getLinkedRecords('items') || [];

    const itemInOrder = activeItems.find(
      (el) => el?.getLinkedRecord('item') === item
    );

    if (!itemInOrder) {
      const itemOrder = store.create(
        `client:root:activeOrder:${itemId}`,
        'ItemInOrder'
      );
      itemOrder.setLinkedRecord(item, 'item');
      itemOrder.setValue(1, 'quantity');
      itemOrder.setValue(`client:root:activeOrder:${itemId}`, 'id');
      activeOrder?.setLinkedRecords([itemOrder, ...activeItems], 'items');
    } else {
      const quantity = itemInOrder?.getValue('quantity') as number;
      itemInOrder?.setValue(quantity + 1, 'quantity');
    }
  });
};

export const updateQuantityOnItem = (
  environment: RelayModernEnvironment,
  itemOrderId: string,
  quantity: number
) => {
  commitLocalUpdate(environment, (store) => {
    const item = store.get(itemOrderId);
    item?.setValue(quantity, 'quantity');
  });
};

export const deleteItemOrder = (
  environment: RelayModernEnvironment,
  itemOrderId: string
) => {
  commitLocalUpdate(environment, (store) => {
    const item = store.get(itemOrderId);

    if (item) {
      store.delete(itemOrderId);
    }
  });
};

export const clearOrder = (environment: RelayModernEnvironment) => {
  commitLocalUpdate(environment, (store) => {
    const activeOrder = store.get('client:root:activeOrder');
    const items = activeOrder?.getLinkedRecords('items');
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    // @ts-ignore
    // eslint-disable-next-line no-restricted-syntax
    for (const item of items) {
      store.delete(item.getDataID());
    }
    activeOrder?.setLinkedRecords([], 'items');
  });
};
