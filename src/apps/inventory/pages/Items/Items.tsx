import { Stack } from '@mantine/core';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { useLayoutEffect } from 'react';
import { graphql, useQueryLoader } from 'react-relay';
import HeaderItemsPage from './components/HeaderItemsPage';
import MainContent from './components/MainContent';

const itemsPageQuery = graphql`
  query ItemsQuery_ItemsPageQuery {
    itemConnection {
      ...TotalCountBadgeComponent_ItemCountFragment
      ...ItemTableTbodyDisplay_AllItemFragment
    }
  }
`;

function Items() {
  const [queryRef, loadQuery] =
    useQueryLoader<ItemsQuery_ItemsPageQuery>(itemsPageQuery);

  useLayoutEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  return (
    <Stack sx={{ height: '100%' }} p="xs">
      <HeaderItemsPage />
      {queryRef && <MainContent queryRef={queryRef} />}
    </Stack>
  );
}

export default Items;
