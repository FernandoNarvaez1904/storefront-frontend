import { Stack, Text } from '@mantine/core';
import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { ProductStack_Query } from './__generated__/ProductStack_Query.graphql';

const selectedItemsQuery = graphql`
  query ProductStack_Query {
    activeOrder {
      items {
        item {
          id
          name
          price
        }
        quantity
      }
    }
  }
`;

function ProductStack() {
  const data = useLazyLoadQuery<ProductStack_Query>(selectedItemsQuery, {});

  const getItems = () => {
    if (data.activeOrder == null) return null;
    if (data.activeOrder.items == null) return null;

    return data.activeOrder.items
      .map((el) => (
        <Text key={el?.item?.id}>
          {el?.item?.name} {el?.quantity}
        </Text>
      ))
      .reverse();
  };

  return <Stack sx={{ flexGrow: 1 }}>{getItems()}</Stack>;
}

export default ProductStack;
