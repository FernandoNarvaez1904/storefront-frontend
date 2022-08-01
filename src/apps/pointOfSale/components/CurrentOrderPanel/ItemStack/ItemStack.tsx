import { Box, ScrollArea, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { ItemStack_Query } from './__generated__/ItemStack_Query.graphql';
import ItemInStack from './ItemInStack';

const selectedItemsQuery = graphql`
  query ItemStack_Query {
    activeOrder {
      items {
        id
        ...ItemInStack_AllItemFragment
      }
    }
    pointOfSaleConf {
      gridType
    }
  }
`;

function ItemStack() {
  const data = useLazyLoadQuery<ItemStack_Query>(
    selectedItemsQuery,
    {},
    { fetchPolicy: 'store-only' }
  );

  // For Scrolling
  const { height, ref } = useElementSize();
  const scrollAreaViewport = useRef<HTMLDivElement>();
  const [prevItemLen, setPrevItemLen] = useState(0);

  const isImageGrid = data.pointOfSaleConf.gridType === 'ImageGrid';

  // Scrolls when item is added
  useEffect(() => {
    if (scrollAreaViewport.current !== undefined && data.activeOrder.items) {
      if (data.activeOrder.items.length > prevItemLen) {
        scrollAreaViewport.current.scrollTo({
          top: scrollAreaViewport.current.scrollHeight,
          behavior: 'smooth',
        });
      }
      setPrevItemLen(data.activeOrder.items.length);
    }
  }, [data.activeOrder.items, scrollAreaViewport, prevItemLen, setPrevItemLen]);

  const getItems = () => {
    if (data.activeOrder === null) return null;
    if (data.activeOrder.items === null) return null;

    return data.activeOrder.items
      .map((item) => {
        if (item === null) return null;
        return (
          <ItemInStack
            fragmentRef={item}
            isImageGrid={isImageGrid}
            key={item.id}
          />
        );
      })
      .reverse();
  };

  return (
    <Box sx={{ flexGrow: 1 }} ref={ref}>
      <ScrollArea
        style={{ height }}
        offsetScrollbars
        viewportRef={scrollAreaViewport as MutableRefObject<HTMLDivElement>}
      >
        <Stack spacing={0}>{getItems()}</Stack>
      </ScrollArea>
    </Box>
  );
}

export default ItemStack;
