import { Box, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { PreloadedQuery } from 'react-relay';
import { ItemsLoader_ItemsPageQuery } from '../../__generated__/ItemsLoader_ItemsPageQuery.graphql';
import HeaderItemsTable from './components/HeaderItemsTable';
import useItemsTableStyles from './ItemsTableStyles';

type Props = {
  queryRef: PreloadedQuery<ItemsLoader_ItemsPageQuery>;
};

function ItemsTableDisplay({ queryRef }: Props) {
  const { classes } = useItemsTableStyles();
  const { ref, height } = useElementSize();

  return (
    <Stack className={classes.fullHeightFlex} spacing={0}>
      <HeaderItemsTable queryRef={queryRef} />
      <Box className={classes.growingFlexItem} ref={ref} />
    </Stack>
  );
}

export default ItemsTableDisplay;
