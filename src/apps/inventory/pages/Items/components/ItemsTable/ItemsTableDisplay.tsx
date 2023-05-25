import { Box, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import ItemDrawer from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer';
import { PreloadedQuery } from 'react-relay';
import { ItemsLoader_ItemsPageQuery } from '../../__generated__/ItemsLoader_ItemsPageQuery.graphql';
import HeaderItemsTable from './components/HeaderItemsTable';
import ItemsTableContent from './components/ItemsTableContent';
import useItemsTableStyles from './ItemsTableStyles';

type Props = {
  queryRef: PreloadedQuery<ItemsLoader_ItemsPageQuery>;
};

function ItemsTableDisplay({ queryRef }: Props) {
  const { classes } = useItemsTableStyles();
  const { ref, height } = useElementSize();

  return (
    <>
      <ItemDrawer />
      <Stack className={classes.fullHeightFlex} spacing={0}>
        <HeaderItemsTable queryRef={queryRef} />
        <Box className={classes.growingFlexItem} ref={ref}>
          <ItemsTableContent queryRef={queryRef} height={height} />
        </Box>
      </Stack>
    </>
  );
}

export default ItemsTableDisplay;
