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

    itemsTableLocalState.setLinkedRecord(drawerState, 'drawerState');

    // root
    const root = store.getRoot();
    root.setLinkedRecord(itemsTableLocalState, 'itemsTable_localState');
  });
};
