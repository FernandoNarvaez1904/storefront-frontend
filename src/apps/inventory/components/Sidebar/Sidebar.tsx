import {
  ActionIcon,
  Code,
  Group,
  Navbar,
  Title,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { IconBuildingWarehouse, IconLogout } from '@tabler/icons';
import useSidebarStyles from 'apps/inventory/components/Sidebar/SidebarStyles';
import route from 'apps/inventory/routes';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const theme = useMantineTheme();
  const { classes, cx } = useSidebarStyles();
  const path = useLocation();
  const [active, setActive] = useState(path.pathname);

  useEffect(() => {
    setActive(path.pathname);
  }, [path]);

  const links = route.subRoutes?.map((subRoute) => (
    <UnstyledButton
      component={Link}
      className={cx(classes.link, {
        [classes.linkActive]: subRoute.path === active,
      })}
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
            <ActionIcon color="red" size="lg" variant="transparent">
              <IconBuildingWarehouse height={32} width={32} />
            </ActionIcon>
            <Title order={4}>Inventory</Title>
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
