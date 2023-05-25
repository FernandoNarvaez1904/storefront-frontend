import { Box, Drawer, useMantineTheme } from '@mantine/core';
import { itemDrawerStateAtom } from 'apps/inventory/pages/Items/state/atoms';
import { useEffect, useState } from 'react';
import { PreloadedQuery } from 'react-relay';
import { useRecoilState } from 'recoil';
import { ItemDrawerLoader_itemQuery } from './__generated__/ItemDrawerLoader_itemQuery.graphql';
import FormUpdateItem from './components/FormUpdateItem';
import ItemDrawerInfoTabs from './components/ItemDrawerInfoTabs';
import ItemDrawerTitle from './components/ItemDrawerTitle';

type Props = {
  queryRef: PreloadedQuery<ItemDrawerLoader_itemQuery>;
};

function ItemDrawerDisplay({ queryRef }: Props) {
  const [itemDrawerState, setItemDrawerState] =
    useRecoilState(itemDrawerStateAtom);

  // Local State opened is the one that opens the drawer. isOpened global state
  // is not used because it won't render the animation.
  const { isOpened } = itemDrawerState;
  const [opened, setOpened] = useState(false);

  const theme = useMantineTheme();

  useEffect(() => {
    setOpened(isOpened);
  }, [isOpened, setOpened]);

  const closeDrawer = () => {
    setItemDrawerState((prev) => ({
      ...prev,
      isOpened: false,
      currentItem: '',
      isEditMode: false,
    }));
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
      <ItemDrawerTitle queryRef={queryRef} closeDrawer={closeDrawer} />

      {itemDrawerState.isEditMode ? (
        <Box sx={{ height: '100%' }}>
          <FormUpdateItem
            queryRef={queryRef}
            onItemUpdate={() =>
              setItemDrawerState((prev) => ({ ...prev, isEditMode: false }))
            }
          />
        </Box>
      ) : (
        <Box sx={{ height: '100%' }}>
          <ItemDrawerInfoTabs queryRef={queryRef} />
        </Box>
      )}
    </Drawer>
  );
}

export default ItemDrawerDisplay;
