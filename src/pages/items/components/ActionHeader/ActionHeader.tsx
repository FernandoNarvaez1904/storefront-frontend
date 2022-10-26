import {
  Breadcrumbs,
  Group,
  MediaQuery,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import { AddItemButton } from './ActionHeader.styles';

function ActionHeader() {
  return (
    <Group sx={{ justifyContent: 'space-between' }}>
      <Breadcrumbs
        separator={
          <Text weight={500} size="md">
            /
          </Text>
        }
      >
        <UnstyledButton>
          <Text size="xl" weight={500}>
            Items
          </Text>
        </UnstyledButton>

        <UnstyledButton>
          <Text size="xl" weight={600}>
            Group
          </Text>
        </UnstyledButton>
      </Breadcrumbs>

      <MediaQuery styles={{ display: 'none' }} largerThan="sm">
        <AddItemButton size="xs" leftIcon={<IconPlus size={20} />} disabled>
          Add Item
        </AddItemButton>
      </MediaQuery>

      <MediaQuery styles={{ display: 'none' }} smallerThan="sm">
        <AddItemButton size="sm" leftIcon={<IconPlus size={20} />} disabled>
          Add Item
        </AddItemButton>
      </MediaQuery>
    </Group>
  );
}

export default ActionHeader;
