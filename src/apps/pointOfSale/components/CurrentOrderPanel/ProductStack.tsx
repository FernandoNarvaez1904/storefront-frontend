import {
  Box,
  CloseButton,
  Group,
  Image,
  NumberInput,
  ScrollArea,
  Stack,
  Table,
  Text,
} from '@mantine/core';
import React from 'react';
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

  const { ref, height } = useElementSize();
  const getItems = () => {
    if (data.activeOrder === null) return null;
    if (data.activeOrder.items === null) return null;

    return data.activeOrder.items.map((el) => {
      if (el === null) return null;
      if (el.item.price === null) return null;

      return (
        <tr key={el.item.id}>
          <td>
            <Group>
              {data.pointOfSaleConf.gridType === 'ImageGrid' && (
                <Image
                  withPlaceholder
                  width={60}
                  height={60}
                  src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2334&q=80"
                />
              )}

              <Box>
                <Text size="md">{el.item.name}</Text>
                <Text size="xs">Price: {el.item.price.toFixed(2)}</Text>
              </Box>
            </Group>
          </td>
          <td style={{ textAlign: 'start' }}>
            <NumberInput
              value={el.quantity}
              style={{ maxWidth: '80px' }}
              size="sm"
              min={0}
              precision={2}
              stepHoldDelay={500}
              stepHoldInterval={100}
              onChange={(value) =>
                updateQuantityOnItem(relayEnvironment, el.id, value || 1)
              }
            />
          </td>
          <td style={{ textAlign: 'end' }}>
            <Stack
              spacing={0}
              style={{
                justifyContent: 'flex-end',
                position: 'relative',
              }}
              align="end"
            >
              <CloseButton
                onClick={() => deleteItemOrder(relayEnvironment, el.id)}
                size="xs"
                style={{ top: 0 }}
              />
              <Text size="md">
                C$
                {Number.isInteger(el.item.price * el.quantity)
                  ? el.item.price * el.quantity
                  : (el.item.price * el.quantity).toFixed(2)}
              </Text>
            </Stack>
          </td>
        </tr>
      );
    });
  };
  return (
    <Box sx={{ flexGrow: 1 }} ref={ref}>
      <ScrollArea style={{ height }} offsetScrollbars>
        <Table verticalSpacing="xs" highlightOnHover>
          <tbody>{getItems()?.reverse()}</tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
}

export default ProductStack;
