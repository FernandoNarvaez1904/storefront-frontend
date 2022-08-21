import { commitLocalUpdate, RecordProxy } from 'relay-runtime';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';

export const openItemDrawer = (
  environment: RelayModernEnvironment,
  itemId: string
) => {
  commitLocalUpdate(environment, (store) => {
    const item = store.get(itemId) as RecordProxy<{}>;

    const drawerState = store.get(
      'client:root:itemsTable_localState:drawerState'
    );

    drawerState?.setValue(true, 'opened');
    drawerState?.setLinkedRecord(item, 'currentItem');
  });
};

export const closeItemDrawer = (environment: RelayModernEnvironment) => {
  commitLocalUpdate(environment, (store) => {
    const drawerState = store.get(
      'client:root:itemsTable_localState:drawerState'
    );

    drawerState?.setValue(false, 'opened');
    drawerState?.setValue(null, 'currentItem');
  });
};

export const updateSearchFilter = (
  environment: RelayModernEnvironment,
  filter: { value: string; type: 'barcode' | 'sku' | 'name' }
) => {
  commitLocalUpdate(environment, (store) => {
    const filterState = store.get('client:root:itemsTable_localState:filter');

    filterState?.setValue(filter.value, "value")
    filterState?.setValue(filter.type, "type")
  });
};
