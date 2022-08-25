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
import { ItemDrawer_itemQuery } from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/__generated__/ItemDrawer_itemQuery.graphql';
import useItemDrawerStyles from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/ItemDrawerStyles';
import { itemDrawerStateAtom } from 'apps/inventory/pages/Items/state/atoms';
import { useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import ItemDrawerContent from './ItemDrawerContent';

const itemDrawerQuery = graphql`
  query ItemDrawer_itemQuery($id: GlobalID!) {
    item(id: $id) {
      id
      name
      ...ItemDrawerContent_SingleItemFragment
      ...FormUpdateItem_ItemFragment
    }
  }
`;

function ItemDrawer({ id, opened }: { id: string; opened: boolean }) {
  const item = useLazyLoadQuery<ItemDrawer_itemQuery>(itemDrawerQuery, {
    id,
  });
  const currentItem = item.item;

  const setItemDrawerState = useSetRecoilState(itemDrawerStateAtom);

  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const theme = useMantineTheme();
  const { classes } = useItemDrawerStyles();

  const closeDrawer = () => {
    setIsEditMode(false);
    setItemDrawerState({ isOpened: false, currentItem: '' });
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
      opened={opened}
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
