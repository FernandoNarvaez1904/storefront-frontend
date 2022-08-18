import {
  ActionIcon,
  Avatar,
  Group,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconBell,
  IconMoon,
  IconSearch,
  IconWifiOff,
} from '@tabler/icons';
import useHeaderStyles from './HeaderStyles';

function Header() {
  const { classes } = useHeaderStyles();
  const { toggle: toggleFullscreen, fullscreen } = useFullscreen();

  return (
    <Group className={classes.header} py={5} px="sm">
      <TextInput
        size="xs"
        icon={<IconSearch size={16} />}
        placeholder="Search"
      />
      <Group>
        <ActionIcon color="red.5" size="lg">
          <IconWifiOff />
        </ActionIcon>

        <ActionIcon size="lg">
          <IconBell />
        </ActionIcon>

        <ActionIcon size="lg">
          <IconMoon />
        </ActionIcon>

        <ActionIcon size="lg" onClick={toggleFullscreen}>
          {fullscreen ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
        </ActionIcon>

        <UnstyledButton>
          <Avatar radius="sm" color="blue" size={30}>
            DR
          </Avatar>
        </UnstyledButton>
      </Group>
    </Group>
  );
}

export default Header;
