import {
  Breadcrumbs,
  Button,
  Center,
  Drawer,
  Group,
  SegmentedControl,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import {
  IconFolderPlus,
  IconLayoutGrid,
  IconList,
  IconPlus,
} from '@tabler/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormCreateItem from '../FormCreateItem';

function HeaderItemsPage() {
  const theme = useMantineTheme();
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [drawerType, setDrawerType] = useState<'item' | 'group'>('item');

  const openDrawer = (openedDrawerType: 'item' | 'group') => () => {
    setDrawerOpened(true);
    setDrawerType(openedDrawerType);
  };

  const onItemCreated = () => {
    setDrawerOpened(false);
    showNotification({
      title: 'Item Added',
      message: '',
      color: 'green',
    });
  };

  const getDrawerTitle = (openedDrawerType: 'item' | 'group') => (
    <Title order={3}>
      {openedDrawerType === 'item' ? 'Add Item' : 'Add Group'}
    </Title>
  );

  const getDrawerContent = () => {
    if (drawerType === 'item') {
      return (
        <FormCreateItem
          onItemCreated={() => {
            onItemCreated();
          }}
        />
      );
    }
    return <h3>Group</h3>;
  };

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
        <SegmentedControl
          value="list"
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

        <Button
          color="blue.5"
          leftIcon={<IconFolderPlus size={20} />}
          onClick={openDrawer('group')}
        >
          Add Group
        </Button>

        <Button
          color="teal.5"
          leftIcon={<IconPlus size={20} />}
          onClick={openDrawer('item')}
        >
          Add Item
        </Button>
        <Drawer
          opened={drawerOpened}
          title={getDrawerTitle(drawerType)}
          size="xl"
          padding="xl"
          position="right"
          overlayColor={
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[2]
          }
          overlayOpacity={0.55}
          overlayBlur={3}
          onClose={() => setDrawerOpened(false)}
        >
          {getDrawerContent()}
        </Drawer>
      </Group>
    </Group>
  );
}

export default HeaderItemsPage;
