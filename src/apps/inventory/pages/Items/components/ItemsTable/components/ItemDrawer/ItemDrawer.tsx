import {
  ActionIcon,
  Box,
  CloseButton,
  Drawer,
  Group,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { IconEdit, IconInfoCircle } from '@tabler/icons';
import FormUpdateItem from 'apps/inventory/pages/Items/components/FormUpdateItem';
import useItemDrawerStyles from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/ItemDrawerStyles';
import { useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import relayEnvironment from 'RelayEnviroment';
import { closeItemDrawer } from '../../store/updateLocal';
import { ItemDrawer_LocalStateQuery } from './__generated__/ItemDrawer_LocalStateQuery.graphql';
import ItemDrawerContent from './ItemDrawerContent';

const itemDrawerQuery = graphql`
  query ItemDrawer_LocalStateQuery {
    itemsTable_localState {
      drawerState {
        opened
        currentItem {
          id
          name
          ...ItemDrawerContent_SingleItemFragment
          ...FormUpdateItem_ItemFragment
        }
      }
    }
  }
`;

function ItemDrawer() {
  const data = useLazyLoadQuery<ItemDrawer_LocalStateQuery>(
    itemDrawerQuery,
    {},
    { fetchPolicy: 'store-only' }
  );
  const { drawerState } = data.itemsTable_localState;
  const { currentItem } = drawerState;

  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const theme = useMantineTheme();
  const { classes } = useItemDrawerStyles();

  const closeDrawer = () => {
    closeItemDrawer(relayEnvironment);
    setIsEditMode(false);
  };

  const getDrawerContent = (isEditModeActive: boolean) => {
    if (isEditModeActive) {
      return (
        <Box sx={{ height: '100%' }}>
          {currentItem !== null && (
            <FormUpdateItem
              itemFragmentRef={currentItem}
              onItemUpdate={() => setIsEditMode(false)}
            />
          )}
        </Box>
      );
    }
    return (
      <Box sx={{ height: '100%' }}>
        {currentItem !== null && (
          <ItemDrawerContent itemFragmentRef={currentItem} />
        )}
      </Box>
    );
  };

  return (
    <Drawer
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
      withCloseButton={false}
      opened={drawerState.opened}
      onClose={() => {
        closeDrawer();
      }}
    >
      <Group sx={{ justifyContent: 'space-between' }} mb="xs">
        <Group align="center">
          {currentItem !== null && (
            <>
              <Title order={2}>
                {isEditMode ? 'Update' : 'View'} {currentItem.name}
              </Title>

              <ActionIcon size="md" onClick={toggleEditMode}>
                {isEditMode ? (
                  <IconInfoCircle size={22} className={classes.defaultButton} />
                ) : (
                  <IconEdit size={22} className={classes.defaultButton} />
                )}
              </ActionIcon>
            </>
          )}
        </Group>
        <CloseButton
          iconSize={16}
          onClick={() => {
            closeDrawer();
          }}
          className={classes.defaultButton}
        />
      </Group>
      {getDrawerContent(isEditMode)}
    </Drawer>
  );
}

export default ItemDrawer;
