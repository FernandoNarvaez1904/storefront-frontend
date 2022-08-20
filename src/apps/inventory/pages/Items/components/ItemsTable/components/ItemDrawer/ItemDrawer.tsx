import { Drawer, useMantineTheme } from '@mantine/core';
import { closeItemDrawer } from 'apps/inventory/pages/Items/components/ItemsTable/store/updateLocal';
import { graphql, useLazyLoadQuery } from 'react-relay';
import relayEnvironment from 'RelayEnviroment';
import { ItemDrawer_LocalStateQuery } from './__generated__/ItemDrawer_LocalStateQuery.graphql';
import ItemDrawerContent from './ItemDrawerContent';

const itemDrawerQuery = graphql`
  query ItemDrawer_LocalStateQuery {
    itemsTable_localState {
      drawerState {
        opened
        currentItem {
          id
          ...ItemDrawerContent_SingleItemFragment
        }
      }
    }
  }
`;

function ItemDrawer() {
  const theme = useMantineTheme();
  const data = useLazyLoadQuery<ItemDrawer_LocalStateQuery>(
    itemDrawerQuery,
    {},
    { fetchPolicy: 'store-only' }
  );

  return (
    <Drawer
      title="Item"
      size="xl"
      padding="xl"
      position="right"
      overlayBlur={3}
      overlayOpacity={0.55}
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      opened={data.itemsTable_localState.drawerState.opened}
      onClose={() => {
        closeItemDrawer(relayEnvironment);
      }}
    >
      {
        data.itemsTable_localState.drawerState.currentItem && <ItemDrawerContent
          itemFragmentRef={data.itemsTable_localState.drawerState.currentItem}
        />
      }

    </Drawer>
  );
}

export default ItemDrawer;
