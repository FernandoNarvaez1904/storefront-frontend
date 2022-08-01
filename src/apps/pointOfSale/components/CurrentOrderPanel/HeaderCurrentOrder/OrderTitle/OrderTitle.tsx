import { Group, Text } from '@mantine/core';
import useOrderTitleStyles from 'apps/pointOfSale/components/CurrentOrderPanel/HeaderCurrentOrder/OrderTitle/OrderTitleStyles';
import React from 'react';

function OrderTitle() {
  const { classes } = useOrderTitleStyles();

  return (
    <Group className={classes.pill} py={2} px="xs">
      <Text weight="bold" size="sm">
        #1904
      </Text>
      <Text weight="bold" size="sm">
        Client Name
      </Text>
      <Text weight="bold" size="sm">
        56
      </Text>
    </Group>
  );
}

export default OrderTitle;
