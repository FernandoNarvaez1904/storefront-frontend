import { Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { itemsTableFilterAtom } from 'apps/inventory/pages/Items/state/atoms';
import { useState } from 'react';
import { PreloadedQuery } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import TotalCountBadge from './components/TotalCountBadge';
import useItemsTableHeaderStyles from './ItemsTableHeaderStyles';

type Props = {
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
};

function HeaderItemsTable({ queryRef }: Props) {
  const { classes } = useItemsTableHeaderStyles();

  const [localSearch, setLocalSearch] = useState('');
  const setItemsTableFilter = useSetRecoilState(itemsTableFilterAtom);
  const onChangeInput = (value: string) => {
    setLocalSearch(value);
    // The timeout is done to delay filtering
    setTimeout(() => {
      setItemsTableFilter({ type: 'name', value });
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
