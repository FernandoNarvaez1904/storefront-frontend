import { ItemDrawerLoader_itemQuery } from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/__generated__/ItemDrawerLoader_itemQuery.graphql';
import { itemDrawerStateAtom } from 'apps/inventory/pages/Items/state/atoms';
import { useEffect } from 'react';
import { graphql, useQueryLoader } from 'react-relay';
import { useRecoilValue } from 'recoil';
import { commitLocalUpdate } from 'relay-runtime';
import relayEnviroment from 'RelayEnviroment';
import ItemDrawerDisplay from './ItemDrawerDisplay';

const itemDrawerQuery = graphql`
  query ItemDrawerLoader_itemQuery($id: ID!) {
    item(id: $id) {
      id
      ...GeneralInformationTabDisplay_itemFragment
      ...FormUpdateItemDisplay_ItemFragment
      ...ItemDrawerTitleDisplay_ItemNameFragment
    }
  }
`;

function ItemDrawerLoader() {
  const itemDrawerState = useRecoilValue(itemDrawerStateAtom);
  const [itemDrawerQueryRef, loader, disposeQuery] =
    useQueryLoader<ItemDrawerLoader_itemQuery>(itemDrawerQuery);

  useEffect(() => {
    if (itemDrawerState.currentItem && itemDrawerState.isOpened) {
      // Adding the existing item data from itemConnection to the store.
      // It creates the expected result for the query, it simulates a
      // request response
      commitLocalUpdate(relayEnviroment, (store) => {
        const root = store.getRoot();
        const item = store.get(itemDrawerState.currentItem);
        if (item === undefined) return;
        root.setLinkedRecord(item, `item(id:"${itemDrawerState.currentItem}")`);
      });

      // Loads data from store, and fetches data from server. When data from
      // server arrives the store will be updated
      loader(
        { id: itemDrawerState.currentItem },
        { fetchPolicy: 'store-and-network' }
      );
    }

    // Marking data to be Garbage Collected
    return () => {
      disposeQuery();
    };
  }, [itemDrawerState, loader, disposeQuery]);

  return (
    <>
      {itemDrawerQueryRef && (
        <ItemDrawerDisplay queryRef={itemDrawerQueryRef} />
      )}
    </>
  );
}

export default ItemDrawerLoader;
