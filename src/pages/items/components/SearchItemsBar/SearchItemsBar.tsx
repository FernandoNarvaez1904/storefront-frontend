import { Center, Group, SegmentedControl, TextInput } from '@mantine/core';
import { IconLayoutGrid, IconList, IconSearch } from '@tabler/icons';

function SearchItemsBar() {
  return (
    <Group spacing="xs" sx={{ width: '100%' }}>
      <TextInput
        size="xs"
        placeholder="Search Items"
        icon={<IconSearch size={16} />}
        rightSectionWidth={110.5}
        sx={{ flexGrow: 1 }}
      />

      <SegmentedControl
        size="sm"
        value="list"
        radius="sm"
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
            disabled: true,
          },
        ]}
      />
    </Group>
  );
}

export default SearchItemsBar;
