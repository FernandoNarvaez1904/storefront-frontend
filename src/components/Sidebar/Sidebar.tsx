import {
  ActionIcon,
  Code,
  Group,
  Navbar,
  Title,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { IconLogout } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from 'routing/allRoutes';
import useSidebarStyles from './SidebarStyles';

type Props = {
  route: AppRoute;
};

function Sidebar({ route }: Props) {
  const path = useLocation();
  const theme = useMantineTheme();
  const { classes, cx } = useSidebarStyles();
  const [active, setActive] = useState(path.pathname);
  const SidebarIcon = route.icon;

  useEffect(() => {
    setActive(path.pathname);
  }, [path]);

  const links = route.subRoutes?.map((subRoute) => (
    <UnstyledButton
      className={cx(classes.link, {
        [classes.linkActive]: subRoute.path === active,
      })}
      component={Link}
      to={subRoute.path}
      key={subRoute.title}
      onClick={() => {
        setActive(subRoute.path);
      }}
    >
      <subRoute.icon className={classes.linkIcon} stroke={1.5} />
      <span>{subRoute.title}</span>
    </UnstyledButton>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart" align="end">
          <Group spacing="xs" align="end" ml="sm">
            <ActionIcon size="lg" variant="transparent" color={route.color}>
              <SidebarIcon height={32} width={32} />
            </ActionIcon>
            <Title order={4}>{route.title}</Title>
          </Group>

          <Code sx={{ fontWeight: 700 }}>v0.0.1</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UnstyledButton component={Link} className={classes.link} to="/">
          <IconLogout
            className={classes.linkIcon}
            stroke={2}
            color={theme.colors.red[5]}
          />
          <span>Exit</span>
        </UnstyledButton>
      </Navbar.Section>
    </Navbar>
  );
}

export default Sidebar;
