import { Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { PreloadedQuery } from 'react-relay';
import TotalCountBadge from './components/TotalCountBadge';
import useItemsTableHeaderStyles from './ItemsTableHeaderStyles';

type Props = {
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
};

function HeaderItemsTable({ queryRef }: Props) {
  const { classes } = useItemsTableHeaderStyles();

  return (
    <Group className={classes.header}>
      <TextInput
        size="xs"
        placeholder="Search Items"
        icon={<IconSearch size={16} />}
        className={classes.searchInput}
      />

      <TotalCountBadge queryRef={queryRef} />
    </Group>
  );
}

export default HeaderItemsTable;
