import {
  ActionIcon,
  Burger,
  Code,
  Group,
  MediaQuery,
  TextInput,
  Title,
} from '@mantine/core';
import { IconBuildingWarehouse, IconSearch } from '@tabler/icons';
import { useRecoilState } from 'recoil';
import { isSidebarOnAtom } from '../atoms';

function LogoAndSearchBar() {
  const SidebarIcon = IconBuildingWarehouse;
  const [isSidebarOn, setIsSidebarOn] =
    useRecoilState<boolean>(isSidebarOnAtom);

  return (
    <Group align="flex-end" spacing={10}>
      <Group spacing={0} align="flex-end">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={isSidebarOn}
            onClick={() => setIsSidebarOn((o: boolean) => !o)}
            size="sm"
          />
        </MediaQuery>

        <Group position="apart" align="end" sx={{ maxWidth: 267 }}>
          <Group spacing="xs" align="end" ml="sm">
            <ActionIcon size="lg" variant="transparent" color="red.5">
              <SidebarIcon height={32} width={32} />
            </ActionIcon>
            <Title order={4}>Storefront</Title>
          </Group>

          <MediaQuery styles={{ display: 'none' }} smallerThan="sm">
            <Code sx={{ fontWeight: 700 }}>v0.0.1</Code>
          </MediaQuery>
        </Group>
      </Group>
      <MediaQuery styles={{ display: 'none' }} smallerThan="xs">
        <TextInput
          size="xs"
          icon={<IconSearch size={16} />}
          placeholder="Search"
        />
      </MediaQuery>
    </Group>
  );
}

export default LogoAndSearchBar;
