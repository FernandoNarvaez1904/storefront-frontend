import {
  Badge,
  Center,
  Group,
  SegmentedControl,
  TextInput,
} from '@mantine/core';
import { IconLayoutGrid, IconList, IconSearch } from '@tabler/icons';
import useItemsTableHeaderStyles from './ItemsTableHeaderStyles';

function ItemsTableHeader() {
  const { classes } = useItemsTableHeaderStyles();
  return (
    <Group className={classes.header}>
      <Group>
        <TextInput
          size="xs"
          placeholder="Search Items"
          icon={<IconSearch size={16} />}
        />
        <SegmentedControl
          value="list"
          size="xs"
          data={[
            {
              label: (
                <Center>
                  <IconList size={18} />
                </Center>
              ),
              value: 'list',
            },
            {
              label: (
                <Center>
                  <IconLayoutGrid size={18} />
                </Center>
              ),
              value: 'grid',
            },
          ]}
        />
      </Group>
      <Badge size="sm">Count: 35</Badge>
    </Group>
  );
}

export default ItemsTableHeader;
