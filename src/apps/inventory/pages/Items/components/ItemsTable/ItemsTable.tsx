import { Box, Skeleton, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { setItemDrawerStoreDefaultValues } from 'apps/inventory/pages/Items/components/ItemsTable/store/defaultValues';
import { Suspense } from 'react';
import { PreloadedQuery } from 'react-relay';
import relayEnvironment from 'RelayEnviroment';
import HeaderItemsTable, {
  HeaderItemsTableSkeleton,
} from './components/HeaderItemsTable';
import ItemsTableContent from './components/ItemsTableContent';
import useMainContentStyles from './ItemsTableStyles';

type Props = {
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
};

function ItemsTable({ queryRef }: Props) {
  const { classes } = useMainContentStyles();
  const { height: tableHeight, ref: refTableHeight } = useElementSize();
  setItemDrawerStoreDefaultValues(relayEnvironment);

  return (
    <Stack className={classes.fullHeightFlex} spacing={0}>
      <Suspense fallback={<HeaderItemsTableSkeleton />}>
        <HeaderItemsTable queryRef={queryRef} />
      </Suspense>

      {/* This Box is needed to get the height of the table to get the scroll bar height */}
      <Box className={classes.growingFlexItem} ref={refTableHeight}>
        <Suspense fallback={<Skeleton width="100%" height="100%" mt="xs" />}>
          <ItemsTableContent height={tableHeight} queryRef={queryRef} />
        </Suspense>
      </Box>
    </Stack>
  );
}

export default ItemsTable;
