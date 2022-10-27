import { useTheme } from '@emotion/react';
import {
  Breadcrumbs,
  Drawer,
  Group,
  MediaQuery,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons';
import { useState } from 'react';
import { AddItemButton } from './ActionHeader.styles';
import FormCreateItem from './FormCreateItem';

function ActionHeader() {
  const theme = useTheme();
  const isScreenSM = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

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
      <Drawer
        opened={drawerOpened}
        title={<Title order={2}>Add Item</Title>}
        size={isScreenSM ? 'md' : 'xl'}
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
        <FormCreateItem
          onItemCreated={() => {
            setDrawerOpened(false);
          }}
        />
      </Drawer>
    </>
  );
}

export default ActionHeader;
