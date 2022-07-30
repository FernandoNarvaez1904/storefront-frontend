import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Box, Paper, Skeleton, Stack } from '@mantine/core';
import { useQueryLoader } from 'react-relay';
import SearchInput from './SearchInput';
import ItemGrid from './ItemGrid';

import AllItemsQueryPrefetch, {
  ItemGrid_AllItemsQuery,
} from './__generated__/ItemGrid_AllItemsQuery.graphql';
import ItemGridConfBar from './ItemGridConfBar';

function ItemGridPanel() {
  const [allItemQueryRef, loadAllItem] = useQueryLoader<ItemGrid_AllItemsQuery>(
    AllItemsQueryPrefetch
  );

  // useElementSize was not used for height as it caused problems with
  // infinite resizing when the page was resized
  const refHeight = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Storing only the initial height
    if (refHeight.current != null) {
      setHeight(refHeight.current.clientHeight);
      loadAllItem({});
    }
  }, [refHeight, setHeight, loadAllItem]);

  return (
    <Paper withBorder shadow="xl" p="lg">
      <Stack style={{ height: '100%' }}>
        <ItemGridConfBar loadAllItem={loadAllItem} />
        <SearchInput />
        <Box style={{ flexGrow: 1 }} ref={refHeight}>
          <Suspense fallback={<Skeleton animate width="100%" height="100%" />}>
            {allItemQueryRef && (
              <ItemGrid height={height} itemsQueryRef={allItemQueryRef} />
            )}
          </Suspense>
        </Box>
      </Stack>
    </Paper>
  );
}

export default ItemGridPanel;
