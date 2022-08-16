import { Box, Skeleton, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';

import { Suspense } from 'react';
import { PreloadedQuery } from 'react-relay';
import HeaderItemsTable, {
  HeaderItemsTableSkeleton,
} from '../HeaderItemsTable';
import ItemsTable from '../ItemsTable';

type Props = {
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
};

function MainContent({ queryRef }: Props) {
  const { height: tableHeight, ref: refTableHeight } = useElementSize();

  return (
    <Stack sx={{ height: '100%' }} spacing={0}>
      <Suspense fallback={<HeaderItemsTableSkeleton />}>
        <HeaderItemsTable queryRef={queryRef} />
      </Suspense>
      <Box sx={{ flexGrow: 1 }} ref={refTableHeight}>
        <Suspense fallback={<Skeleton width="100%" height="100%" mt="xs" />}>
          <ItemsTable height={tableHeight} queryRef={queryRef} />
        </Suspense>
      </Box>
    </Stack>
  );
}

export default MainContent;