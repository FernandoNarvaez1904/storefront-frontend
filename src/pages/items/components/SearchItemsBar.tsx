import { Badge, Group, MediaQuery, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

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

      <MediaQuery styles={{ display: 'none' }} smallerThan="sm">
        <Badge> Item Count: 56</Badge>
      </MediaQuery>

      <MediaQuery styles={{ display: 'none' }} largerThan="sm">
        <Badge>Items: 56</Badge>
      </MediaQuery>
    </Group>
  );
}

export default SearchItemsBar;
