import React, { useEffect, useRef, useState } from 'react';
import { Box, DefaultProps, Paper, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { useQueryLoader } from 'react-relay';
import SearchInput from './SearchInput';
import ItemGrid from './ItemGrid';

import AllItemsQueryPrefetch, {
  ItemGrid_AllItemsQuery,
} from './__generated__/ItemGrid_AllItemsQuery.graphql';

function ItemGridPanel(props: DefaultProps) {
  const [allItemQueryRef, loadAllItem] = useQueryLoader<ItemGrid_AllItemsQuery>(
    AllItemsQueryPrefetch
  );

  const { ref: refWidth, width } = useElementSize();
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
    <Paper withBorder shadow="xl" ref={refWidth} {...props}>
      <Stack style={{ height: '100%' }}>
        <SearchInput />
        <Box style={{ flexGrow: 1 }} ref={refHeight}>
          {allItemQueryRef && (
            <ItemGrid
              width={width}
              height={height}
              itemsQueryRef={allItemQueryRef}
            />
          )}
        </Box>
      </Stack>
    </Paper>
  );
}

export default ItemGridPanel;
