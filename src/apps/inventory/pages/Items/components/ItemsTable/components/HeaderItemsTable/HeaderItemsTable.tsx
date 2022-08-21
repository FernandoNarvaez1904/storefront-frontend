import { Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { updateSearchFilter } from 'apps/inventory/pages/Items/components/ItemsTable/store/updateLocal';
import { useState } from 'react';
import { PreloadedQuery } from 'react-relay';
import relayEnvironment from 'RelayEnviroment';
import TotalCountBadge from './components/TotalCountBadge';
import useItemsTableHeaderStyles from './ItemsTableHeaderStyles';

type Props = {
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
};

function HeaderItemsTable({ queryRef }: Props) {
  const { classes } = useItemsTableHeaderStyles();

  const [localSearch, setLocalSearch] = useState('');
  const onChangeInput = (value: string) => {
    setLocalSearch(value);
    // The timeout is done to delay filtering
    setTimeout(() => {
      updateSearchFilter(relayEnvironment, {
        value,
        type: 'name',
      });
    }, 50);
  };

  return (
    <Group className={classes.header}>
      <TextInput
        value={localSearch}
        size="xs"
        placeholder="Search Items"
        icon={<IconSearch size={16} />}
        className={classes.searchInput}
        onChange={(e) => {
          onChangeInput(e.target.value);
        }}
      />

      <TotalCountBadge queryRef={queryRef} />
    </Group>
  );
}

export default HeaderItemsTable;
