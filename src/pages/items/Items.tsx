import { Box, Skeleton, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import React, { Suspense } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { graphql } from 'relay-runtime';
import { useLoaderData } from 'react-router-dom';
import ActionHeader from './components/ActionHeader';

import ItemsTable from './components/ItemsTable';
import SearchItemsBar from './components/SearchItemsBar';
import { ItemsQuery } from './__generated__/ItemsQuery.graphql';

const ItemDrawer = React.lazy(() => import('./components/ItemsDrawer'));

const itemQuery = graphql`
  query ItemsQuery {
    ...ItemsTableItemConnectionFragment
  }
`;

function Items() {
  const { ref, height } = useElementSize();

  const dataLoaderRef = useLoaderData() as PreloadedQuery<ItemsQuery>;
  const dataRef = usePreloadedQuery<ItemsQuery>(itemQuery, dataLoaderRef);

  return (
    <Stack pt="xs" sx={{ height: '100%' }}>
      <ItemDrawer />
      <ActionHeader />

      <Stack mb={0} pb={0} spacing={0} sx={{ flexGrow: 1 }}>
        <SearchItemsBar />
        <Box sx={{ flexGrow: 1 }} ref={ref}>
          <Suspense fallback={<Skeleton height="100%" width="100%" />}>
            {height !== 0 && (
              <ItemsTable height={height as number} dataRef={dataRef} />
            )}
          </Suspense>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Items;
