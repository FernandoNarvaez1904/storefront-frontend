import styled from '@emotion/styled';
import {
  ActionIcon,
  ActionIconProps,
  Avatar,
  createPolymorphicComponent,
  Group,
  MediaQuery,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconBell,
  IconMoon,
  IconSun,
  IconWifiOff,
} from '@tabler/icons';

const DefaultActionIconButton = createPolymorphicComponent<
  'button',
  ActionIconProps
>(
  styled(ActionIcon)(({ theme }) => ({
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  }))
);

const ChangeThemeIconButton = createPolymorphicComponent<
  'button',
  ActionIconProps
>(
  styled(ActionIcon)(({ theme }) => ({
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.yellow[4]
        : theme.colors.blue[6],
  }))
);

function ActionIconsButtonBar() {
  const { toggle: toggleFullscreen, fullscreen } = useFullscreen();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <Group>
      <MediaQuery styles={{ display: 'none' }} smallerThan="sm">
        <DefaultActionIconButton color="red.5" size="lg" disabled>
          <IconWifiOff />
        </DefaultActionIconButton>
      </MediaQuery>

      <Tooltip
        label={fullscreen ? 'Minimize' : 'Maximize'}
        withArrow
        openDelay={500}
      >
        <MediaQuery styles={{ display: 'none' }} smallerThan="xs">
          <DefaultActionIconButton size="lg" onClick={() => toggleFullscreen()}>
            {fullscreen ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
          </DefaultActionIconButton>
        </MediaQuery>
      </Tooltip>

      <Tooltip
        label={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        withArrow
        openDelay={500}
      >
        <ChangeThemeIconButton size="lg" onClick={() => toggleColorScheme()}>
          {isDarkMode ? <IconSun /> : <IconMoon />}
        </ChangeThemeIconButton>
      </Tooltip>

      <DefaultActionIconButton size="lg">
        <IconBell />
      </DefaultActionIconButton>

      <DefaultActionIconButton>
        <Avatar radius="sm" color="blue" size={30}>
          DR
        </Avatar>
      </DefaultActionIconButton>
    </Group>
  );
}

export default ActionIconsButtonBar;
