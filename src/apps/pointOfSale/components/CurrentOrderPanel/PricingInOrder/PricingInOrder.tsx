import { Box, Divider, Group, Stack, Text } from '@mantine/core';
import { PricingInOrder_AllItemQuery } from 'apps/pointOfSale/components/CurrentOrderPanel/PricingInOrder/__generated__/PricingInOrder_AllItemQuery.graphql';
import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import usePricingInOrderStyles from './PricingInOrderStyles';

const selectedItemsQuery = graphql`
  query PricingInOrder_AllItemQuery {
    activeOrder {
      items {
        item {
          price
        }
        quantity
      }
    }
  }
`;

function PricingInOrder() {
  const data = useLazyLoadQuery<PricingInOrder_AllItemQuery>(
    selectedItemsQuery,
    {}
  );
  const { classes } = usePricingInOrderStyles();

  const getTotalPrice = (): number => {
    if (data === null) return 0;
    if (data.activeOrder === null) return 0;
    if (data.activeOrder.items === null) return 0;
    let totalPrice: number = 0;

    data.activeOrder.items.forEach((el) => {
      if (el === null) return 0;
      if (el.item.price === null) return 0;
      totalPrice += el.item.price * el.quantity;
      return undefined;
    });

    return Number(totalPrice.toFixed(2));
  };

  return (
    <Stack spacing={10}>
      <Divider variant="dashed" />
      <Box>
        <Group className={classes.priceRow}>
          <Text size="sm">Subtotal</Text>
          <Text size="sm" weight="bold">
            C$
            {getTotalPrice().toLocaleString(undefined, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </Text>
        </Group>
      </Box>
      <Box>
        <Group className={classes.priceRow}>
          <Text size="sm">Taxes</Text>
          <Text size="sm" weight="bold">
            C$0.00
          </Text>
        </Group>
      </Box>

      <Group className={classes.priceRow}>
        <Text size="sm">Total</Text>
        <Text size="sm" weight="bolder">
          C$
          {getTotalPrice().toLocaleString(undefined, {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </Text>
      </Group>
    </Stack>
  );
}

export default PricingInOrder;
