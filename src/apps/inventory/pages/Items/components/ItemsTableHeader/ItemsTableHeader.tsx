import { Badge, Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import useItemsTableHeaderStyles from './ItemsTableHeaderStyles';

function ItemsTableHeader() {
  const { classes } = useItemsTableHeaderStyles();
  return (
    <Group className={classes.header}>
      <TextInput
        size="xs"
        placeholder="Search Items"
        icon={<IconSearch size={16} />}
        sx={{ flexGrow: 1 }}
      />
      <Badge> Item Count: 35</Badge>
    </Group>
  );
}

export default ItemsTableHeader;
