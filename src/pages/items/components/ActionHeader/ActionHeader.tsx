import {
  Breadcrumbs,
  Group,
  MediaQuery,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import { useState } from 'react';
import DefaultDrawer from '../../../../components/DefaultDrawer';
import { AddItemButton } from './ActionHeader.styles';
import FormCreateItem from './FormCreateItem';

function ActionHeader() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <>
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
          <AddItemButton
            size="xs"
            leftIcon={<IconPlus size={20} />}
            onClick={() => setDrawerOpened(true)}
          >
            Add Item
          </AddItemButton>
        </MediaQuery>

        <MediaQuery styles={{ display: 'none' }} smallerThan="sm">
          <AddItemButton
            size="sm"
            leftIcon={<IconPlus size={20} />}
            onClick={() => setDrawerOpened(true)}
          >
            Add Item
          </AddItemButton>
        </MediaQuery>
      </Group>
      <DefaultDrawer
        isOpen={drawerOpened}
        title="Add Item"
        onClose={() => setDrawerOpened(false)}
      >
        <FormCreateItem
          onItemCreated={() => {
            setDrawerOpened(false);
          }}
        />
      </DefaultDrawer>
    </>
  );
}

export default ActionHeader;
