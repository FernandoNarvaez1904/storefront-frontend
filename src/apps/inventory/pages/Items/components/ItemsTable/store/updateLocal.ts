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

    drawerState?.setValue(null, 'currentItem');
    drawerState?.setValue(false, 'opened');
  });
};
