import { Stack } from '@mantine/core';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { useLayoutEffect } from 'react';
import { graphql, useQueryLoader } from 'react-relay';
import HeaderItemsPage from './components/HeaderItemsPage';
import MainContent from './components/MainContent';
import useItemsStyles from './itemsStyles';

const itemsPageQuery = graphql`
  query ItemsQuery_ItemsPageQuery {
    itemConnection {
      ...TotalCountBadgeDisplay_ItemCountFragment
      ...TbodyItemsTableDisplay_AllItemFragment
    }
  }
`;

function Items() {
  const { classes } = useItemsStyles();
  const [queryRef, loadQuery] =
    useQueryLoader<ItemsQuery_ItemsPageQuery>(itemsPageQuery);

  // Using layoutEffect because it will send the request sooner
  useLayoutEffect(() => {
    // Loading data from server
    loadQuery({});
  }, [loadQuery]);

  return (
    <Stack className={classes.itemsPageContainer}>
      <HeaderItemsPage />
      {queryRef && <MainContent queryRef={queryRef} />}
    </Stack>
  );
}

export default Items;
