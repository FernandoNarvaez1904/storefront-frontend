import { commitLocalUpdate } from 'relay-runtime';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';

export const setItemDrawerStoreDefaultValues = (
  environment: RelayModernEnvironment
) => {
  commitLocalUpdate(environment, (store) => {
    // drawerState
    const drawerStateId = 'client:root:itemsTable_localState:drawerState';
    let drawerState = store.get(drawerStateId);
    if (drawerState === null || drawerState === undefined) {
      drawerState = store.create(drawerStateId, 'ItemsTable_DrawerLocalState');
    }

    drawerState.setValue(false, 'opened');
    drawerState.setValue(null, 'currentItem');

    // itemsTable_localState
    const itemsTableLocalStateId = 'client:root:itemsTable_localState';
    let itemsTableLocalState = store.get(itemsTableLocalStateId);
    if (itemsTableLocalState === null || itemsTableLocalState === undefined) {
      itemsTableLocalState = store.create(
        itemsTableLocalStateId,
        'ItemsTable_DrawerLocalState'
      );
    }

    // filter
    const filterId = 'client:root:itemsTable_localState:filter';
    let filter = store.get(filterId);
    if (filter === null || filter === undefined) {
      filter = store.create(filterId, 'ItemsTable_Filter');
    }

    filter.setValue('', 'value');
    filter.setValue('name', 'type');

    // set local state
    itemsTableLocalState.setLinkedRecord(drawerState, 'drawerState');
    itemsTableLocalState.setLinkedRecord(filter, 'filter');

    // root
    const root = store.getRoot();
    root.setLinkedRecord(itemsTableLocalState, 'itemsTable_localState');
  });
};
