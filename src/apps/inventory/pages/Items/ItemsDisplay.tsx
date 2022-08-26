import { Stack } from '@mantine/core';
import { PreloadedQuery } from 'react-relay';
import { ItemsLoader_ItemsPageQuery } from './__generated__/ItemsLoader_ItemsPageQuery.graphql';
import HeaderItemsPage from './components/HeaderItemsPage';
import ItemsTable from './components/ItemsTable';
import useItemsStyles from './itemsStyles';

type Props = {
  queryRef: PreloadedQuery<ItemsLoader_ItemsPageQuery>;
};

function ItemsDisplay({ queryRef }: Props) {
  const { classes } = useItemsStyles();

  return (
    <Stack className={classes.itemsPageContainer}>
      <HeaderItemsPage />
      <ItemsTable queryRef={queryRef} />
    </Stack>
  );
}

export default ItemsDisplay;
