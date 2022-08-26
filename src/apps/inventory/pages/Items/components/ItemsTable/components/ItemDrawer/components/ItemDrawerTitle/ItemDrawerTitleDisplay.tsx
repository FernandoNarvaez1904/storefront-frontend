import { ActionIcon, CloseButton, Group, Title } from '@mantine/core';
import { IconEdit, IconInfoCircle } from '@tabler/icons';
import ItemDrawerLoader_itemQueryGraphql, {
  ItemDrawerLoader_itemQuery,
} from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/__generated__/ItemDrawerLoader_itemQuery.graphql';
import { ItemDrawerTitleDisplay_ItemNameFragment$key } from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/components/ItemDrawerTitle/__generated__/ItemDrawerTitleDisplay_ItemNameFragment.graphql';
import useItemDrawerStyles from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/ItemDrawerStyles';
import { itemDrawerStateAtom } from 'apps/inventory/pages/Items/state/atoms';
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
} from 'react-relay';
import { useRecoilState } from 'recoil';

const itemNameFragment = graphql`
  fragment ItemDrawerTitleDisplay_ItemNameFragment on ItemType {
    name
  }
`;

export type ItemDrawerTitleDisplayProps = {
  closeDrawer: () => void;
  queryRef: PreloadedQuery<ItemDrawerLoader_itemQuery>;
};

function ItemDrawerTitleDisplay({
  closeDrawer,
  queryRef,
}: ItemDrawerTitleDisplayProps) {
  const data = usePreloadedQuery<ItemDrawerLoader_itemQuery>(
    ItemDrawerLoader_itemQueryGraphql,
    queryRef
  );
  const item = useFragment<ItemDrawerTitleDisplay_ItemNameFragment$key>(
    itemNameFragment,
    data.item
  );

  const [itemDrawerState, setItemDrawerState] =
    useRecoilState(itemDrawerStateAtom);
  const { isEditMode } = itemDrawerState;

  const { classes } = useItemDrawerStyles();

  const toggleEditMode = () => {
    setItemDrawerState((prev) => ({
      ...prev,
      isEditMode: !prev.isEditMode,
    }));
  };

  return (
    <Group sx={{ justifyContent: 'space-between' }} mb="xs">
      <Group align="center">
        <>
          <Title order={2}>
            {isEditMode ? 'Update' : 'View'} {item.name}
          </Title>

          <ActionIcon size="md" onClick={toggleEditMode}>
            {isEditMode ? (
              <IconInfoCircle size={22} className={classes.defaultButton} />
            ) : (
              <IconEdit size={22} className={classes.defaultButton} />
            )}
          </ActionIcon>
        </>
      </Group>

      <CloseButton
        iconSize={16}
        onClick={() => {
          closeDrawer();
        }}
        className={classes.defaultButton}
      />
    </Group>
  );
}

export default ItemDrawerTitleDisplay;
