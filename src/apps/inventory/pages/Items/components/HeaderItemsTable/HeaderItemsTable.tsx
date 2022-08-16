import { Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { ItemsQuery_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { PreloadedQuery } from 'react-relay';
import TotalCountBadge from './components/TotalCountBadge';
import useItemsTableHeaderStyles from './ItemsTableHeaderStyles';

function HeaderItemsTable({
  queryRef,
}: {
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
}) {
  const { classes } = useItemsTableHeaderStyles();

  return (
    <Group className={classes.header}>
      <TextInput
        size="xs"
        placeholder="Search Items"
        icon={<IconSearch size={16} />}
        sx={{ flexGrow: 1 }}
      />

      <TotalCountBadge queryRef={queryRef} />
    </Group>
  );
}

export default HeaderItemsTable;
