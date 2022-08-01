import {
  Box,
  CloseButton,
  Divider,
  Group,
  Image,
  NumberInput,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useElementSize } from '@mantine/hooks';
import { ProductStack_Query } from './__generated__/ProductStack_Query.graphql';
import relayEnvironment from '../../../../RelayEnviroment';
import { deleteItemOrder, updateQuantityOnItem } from '../../store/updateLocal';

const selectedItemsQuery = graphql`
  query ProductStack_Query {
    activeOrder {
      items {
        id
        item {
          id
          name
          price
        }
        quantity
      }
    }
    pointOfSaleConf {
      gridType
    }
  }
`;

function ProductStack() {
  const data = useLazyLoadQuery<ProductStack_Query>(
    selectedItemsQuery,
    {},
    { fetchPolicy: 'store-only' }
  );
  const viewport = useRef<HTMLDivElement>();
  const [prevLength, setPrevLength] = useState(0);
  const isImageGrid = data.pointOfSaleConf.gridType === 'ImageGrid';

  useEffect(() => {
    if (viewport.current !== undefined && data.activeOrder.items) {
      if (data.activeOrder.items.length > prevLength) {
        viewport.current.scrollTo({
          top: viewport.current.scrollHeight,
          behavior: 'smooth',
        });
      }
      setPrevLength(data.activeOrder.items.length);
    }
  }, [data.activeOrder.items, viewport, prevLength, setPrevLength]);

  const getItems = () => {
    if (data.activeOrder === null) return null;
    if (data.activeOrder.items === null) return null;

    return data.activeOrder.items
      .map((el) => {
        if (el === null) return null;
        if (el.item.price === null) return null;

        return (
          <Box key={el.id}>
            <Group
              sx={{
                height: 60,
                width: '100%',
              }}
              mb="xs"
              spacing={0}
              align="center"
            >
              <Group
                spacing={0}
                noWrap
                sx={{
                  width: 'calc(40%)',
                  flexGrow: 1,
                }}
              >
                <CloseButton
                  onClick={() => deleteItemOrder(relayEnvironment, el.id)}
                  size="xs"
                />
                {isImageGrid && (
                  <Image width={50} height={50} withPlaceholder />
                )}

                <Box
                  sx={{
                    overflow: 'hidden',
                  }}
                  ml={!isImageGrid ? 10 : 0}
                >
                  <Text
                    size="md"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    weight={isImageGrid ? 'normal' : 'bold'}
                  >
                    {el.item.name}
                  </Text>
                  <Text size="xs">Price: C${el.item.price}</Text>
                </Box>
              </Group>

              <Box
                sx={{
                  width: 'calc(30%) ',
                  maxWidth: '100px',
                }}
                ml={5}
              >
                <NumberInput
                  value={el.quantity}
                  size="sm"
                  min={1}
                  precision={2}
                  stepHoldDelay={500}
                  stepHoldInterval={100}
                  onChange={(value) =>
                    updateQuantityOnItem(relayEnvironment, el.id, value || 1)
                  }
                />
              </Box>

              <Group
                sx={{
                  width: 'calc(30%)',
                  textAlign: 'right',
                  overflow: 'hidden',
                  justifyContent: 'flex-end',
                }}
                px={5}
              >
                <Text
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  C${(el.item.price * el.quantity).toFixed(2)}
                </Text>
              </Group>
            </Group>
            <Divider />
          </Box>
        );
      })
      .reverse();
  };

  const { height, ref } = useElementSize();
  return (
    <Box sx={{ flexGrow: 1 }} ref={ref}>
      <ScrollArea
        style={{ height }}
        offsetScrollbars
        viewportRef={viewport as MutableRefObject<HTMLDivElement>}
      >
        <Stack spacing={0}>{getItems()}</Stack>
      </ScrollArea>
    </Box>
  );
}

export default ProductStack;
