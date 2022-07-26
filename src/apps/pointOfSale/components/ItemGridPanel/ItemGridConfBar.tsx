import { Button, Group } from '@mantine/core';
import { Refresh } from 'tabler-icons-react';
import React from 'react';
import { UseQueryLoaderLoadQueryOptions } from 'react-relay';
import { ItemGrid_AllItemsQuery$variables } from './__generated__/ItemGrid_AllItemsQuery.graphql';

type Props = {
  loadAllItem: (
    variables: ItemGrid_AllItemsQuery$variables,
    options?: UseQueryLoaderLoadQueryOptions | undefined
  ) => any;
};

function ItemGridConfBar({ loadAllItem }: Props) {
  return (
    <Group>
      <Button
        onClick={() => loadAllItem({}, { fetchPolicy: 'network-only' })}
        size="sm"
        leftIcon={<Refresh size={18} />}
      >
        Refresh
      </Button>
    </Group>
  );
}

export default ItemGridConfBar;
