import {
  Box,
  CloseButton,
  Divider,
  Group,
  Image,
  NumberInput,
  Text,
} from '@mantine/core';
import {
  deleteItemOrder,
  updateQuantityOnItem,
} from 'apps/pointOfSale/store/updateLocal';
import React from 'react';
import { graphql, useFragment } from 'react-relay';
import relayEnvironment from 'RelayEnviroment';
import { ItemInStack_AllItemFragment$key } from './__generated__/ItemInStack_AllItemFragment.graphql';
import useItemInStackStyles from './ItemInStackStyles';

const dataFragment = graphql`
  fragment ItemInStack_AllItemFragment on ItemInOrder {
    id
    item {
      name
      price
    }
    quantity
  }
`;

type Props = {
  fragmentRef: ItemInStack_AllItemFragment$key;
  isImageGrid: boolean;
};

function ItemInStack({ fragmentRef, isImageGrid }: Props) {
  const data = useFragment<ItemInStack_AllItemFragment$key>(
    dataFragment,
    fragmentRef
  );
  const { classes } = useItemInStackStyles({ isImageGrid });

  if (data.item.price === null) return null;

  return (
    <Box>
      <Group className={classes.root} mb="xs" spacing={0} align="center">
        <Group spacing={0} noWrap className={classes.titleRoot}>
          <CloseButton
            onClick={() => deleteItemOrder(relayEnvironment, data.id)}
            size="xs"
          />

          {isImageGrid && <Image width={50} height={50} withPlaceholder />}

          <Box className={classes.titleNamePriceRoot}>
            <Text size="md" className={classes.titleNameText}>
              {data.item.name}
            </Text>
            <Text size="xs">Price: C${data.item.price}</Text>
          </Box>
        </Group>

        <Box className={classes.numberInputRoot} ml={5}>
          <NumberInput
            value={data.quantity}
            size="sm"
            min={1}
            precision={2}
            stepHoldDelay={500}
            stepHoldInterval={100}
            onChange={(value) =>
              updateQuantityOnItem(relayEnvironment, data.id, value || 1)
            }
          />
        </Box>

        <Group className={classes.priceRoot} px={5}>
          <Text className={classes.priceText}>
            C${(data.item.price * data.quantity).toFixed(2)}
          </Text>
        </Group>
      </Group>
      <Divider />
    </Box>
  );
}

export default ItemInStack;
