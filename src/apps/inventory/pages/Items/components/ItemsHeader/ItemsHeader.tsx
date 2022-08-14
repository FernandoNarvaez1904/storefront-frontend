import {
  Breadcrumbs,
  Button,
  Group,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconFolderPlus, IconPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';

function ItemsHeader() {
  return (
    <Group sx={{ justifyContent: 'space-between' }} align="flex-end">
      <Breadcrumbs
        separator={
          <Text weight={500} size="md">
            /
          </Text>
        }
      >
        <UnstyledButton sx={{ textAlign: 'end' }}>
          <Text size="xl" weight={500} component={Link} to="/inventory">
            Inventory
          </Text>
        </UnstyledButton>
        <UnstyledButton>
          <Text size="xl" weight={700} component={Link} to="/inventory/items">
            Items
          </Text>
        </UnstyledButton>
      </Breadcrumbs>
      <Group>
        <Button color="blue.5" leftIcon={<IconFolderPlus size={20} />}>
          Add Group
        </Button>
        <Button color="teal.5" leftIcon={<IconPlus size={20} />}>
          Add Item
        </Button>
      </Group>
    </Group>
  );
}

export default ItemsHeader;
