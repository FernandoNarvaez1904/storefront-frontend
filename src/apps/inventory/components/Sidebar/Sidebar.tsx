import {
  ActionIcon,
  Code,
  Group,
  Navbar,
  Title,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import {
  IconBasket,
  IconBuildingWarehouse,
  IconGauge,
  IconLogout,
} from '@tabler/icons';
import useSidebarStyles from 'apps/inventory/components/Sidebar/SidebarStyles';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
  { link: '', label: 'Dashboard', icon: IconGauge },
  { link: '', label: 'Items', icon: IconBasket },
];

function Sidebar() {
  const theme = useMantineTheme();
  const { classes, cx } = useSidebarStyles();
  const [active, setActive] = useState('Dashboard');

  const links = data.map((item) => (
    <UnstyledButton<'a'>
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </UnstyledButton>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart" align="end">
          <Group spacing="xs" align="end" ml="sm">
            <ActionIcon color="red" size="lg">
              <IconBuildingWarehouse height={32} width={32} />
            </ActionIcon>
            <Title order={4}>Inventory</Title>
          </Group>

          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
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
