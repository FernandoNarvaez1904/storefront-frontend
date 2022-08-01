import {
  Box,
  CloseButton,
  Divider,
  Group,
  Image,
  NumberInput,
  Text,
} from '@mantine/core';
import React from 'react';
import { graphql, useFragment } from 'react-relay';
import { deleteItemOrder, updateQuantityOnItem } from '../../store/updateLocal';
import relayEnvironment from '../../../../RelayEnviroment';
import { ItemInOrder_AllItemFragment$key } from './__generated__/ItemInOrder_AllItemFragment.graphql';

const dataFragment = graphql`
  fragment ItemInOrder_AllItemFragment on ItemInOrder {
    id
    item {
      name
      price
    }
    quantity
  }
`;

type Props = {
  fragmentRef: ItemInOrder_AllItemFragment$key;
  isImageGrid: boolean;
};

function ItemInOrder({ fragmentRef, isImageGrid }: Props) {
  const data = useFragment<ItemInOrder_AllItemFragment$key>(
    dataFragment,
    fragmentRef
  );

  if (data.item.price === null) return null;

  return (
    <Box>
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
            onClick={() => deleteItemOrder(relayEnvironment, data.id)}
            size="xs"
          />
          {isImageGrid && <Image width={50} height={50} withPlaceholder />}

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
              {data.item.name}
            </Text>
            <Text size="xs">Price: C${data.item.price}</Text>
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
            C${(data.item.price * data.quantity).toFixed(2)}
          </Text>
        </Group>
      </Group>
      <Divider />
    </Box>
  );
}

export default ItemInOrder;
