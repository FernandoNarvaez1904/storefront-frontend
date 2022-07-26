import { Refresh, Search } from 'tabler-icons-react';
import { Button, Group, TextInput } from '@mantine/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { UseQueryLoaderLoadQueryOptions } from 'react-relay';
import { filterItemValue } from '../../state/Atoms';
import { ItemGrid_AllItemsQuery$variables } from './__generated__/ItemGrid_AllItemsQuery.graphql';

type Props = {
  loadAllItem: (
    variables: ItemGrid_AllItemsQuery$variables,
    options?: UseQueryLoaderLoadQueryOptions | undefined
  ) => any;
};

function SearchInput({ loadAllItem }: Props) {
  const [value, setValue] = useRecoilState(filterItemValue);

  return (
    <Group spacing="xs" sx={{ width: '97%' }}>
      <TextInput
        value={value.value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, value: e.target.value }))
        }
        icon={<Search size={18} />}
        radius="md"
        size="sm"
        placeholder="Search Items"
        sx={{ flexGrow: 1 }}
      />
      <Button
        onClick={() => loadAllItem({}, { fetchPolicy: 'network-only' })}
        size="xs"
        leftIcon={<Refresh size={18} />}
      >
        Refresh
      </Button>
    </Group>
  );
}

export default SearchInput;
