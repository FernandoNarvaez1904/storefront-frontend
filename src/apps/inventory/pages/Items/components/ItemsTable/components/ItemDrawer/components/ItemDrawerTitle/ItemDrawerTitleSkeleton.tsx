import { CloseButton, Group, Skeleton } from '@mantine/core';
import useItemDrawerStyles from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/ItemDrawerStyles';

type Props = {
  closeDrawer: () => void;
};

function ItemDrawerTitleSkeleton({ closeDrawer }: Props) {
  const { classes } = useItemDrawerStyles();

  return (
    <Group sx={{ justifyContent: 'space-between' }} mb="xs">
      <Skeleton height={35.09} width={300} />
      <CloseButton
        className={classes.defaultButton}
        iconSize={16}
        onClick={() => {
          closeDrawer();
        }}
      />
    </Group>
  );
}

export default ItemDrawerTitleSkeleton;
