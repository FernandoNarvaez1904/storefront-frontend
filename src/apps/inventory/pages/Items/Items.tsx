import { Stack } from '@mantine/core';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { useLayoutEffect } from 'react';
import { graphql, useQueryLoader } from 'react-relay';
import { RecoilRoot } from 'recoil';
import HeaderItemsPage from './components/HeaderItemsPage';
import ItemsTable from './components/ItemsTable';
import useItemsStyles from './itemsStyles';

const itemsPageQuery = graphql`
  query ItemsQuery_ItemsPageQuery {
    itemConnection {
      ...TbodyItemsTableDisplay_AllItemFragment
      ...TotalCountBadgeDisplay_ItemCountFragment

      # This is included to not force loading, when entering pos
      # It does not lead to any queryRef, because the fragment is called
      # in its own component via useLazyLoadQuery
      edges {
        node {
          ...ItemDrawerContent_SingleItemFragment
          ...FormUpdateItem_ItemFragment
        }
      }
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
    <RecoilRoot>
      <Stack className={classes.itemsPageContainer}>
        <HeaderItemsPage />
        {queryRef && <ItemsTable queryRef={queryRef} />}
      </Stack>
    </RecoilRoot>

  );
}

export default Items;
