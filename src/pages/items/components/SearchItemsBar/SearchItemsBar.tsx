import { Center, Group, SegmentedControl, TextInput } from '@mantine/core';
import { IconLayoutGrid, IconList, IconSearch } from '@tabler/icons';
import { useRecoilState } from 'recoil';
import { tableGlobalFilter } from '../../state/atoms';

function SearchItemsBar() {
  const [globalFilter, setGlobalFilter] = useRecoilState(tableGlobalFilter);

  return (
    <Group spacing="xs" sx={{ width: '100%' }}>
      <TextInput
        size="xs"
        placeholder="Search Items"
        icon={<IconSearch size={16} />}
        sx={{ flexGrow: 1 }}
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
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
