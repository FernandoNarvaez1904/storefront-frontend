import { Skeleton } from '@mantine/core';
import useItemsTableStyles from './ItemsTableStyles';

function ItemsTableSkeleton() {
  const { classes } = useItemsTableStyles();
  return (
    <Skeleton
      width="100%"
      height="100%"
      mt="xs"
      className={classes.growingFlexItem}
    />
  );
}

export default ItemsTableSkeleton;
