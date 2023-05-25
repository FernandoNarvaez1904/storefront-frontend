import styled from '@emotion/styled';
import { Navbar, Stack, useMantineTheme } from '@mantine/core';
import { IconBasket, IconDashboard, IconLogout } from '@tabler/icons';
import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isSidebarOnAtom } from '../atoms';
import SidebarButtonLink from './SidebarButtonLink';
import SidebarIconButton, {
  SidebarIconButtonIconWrapper,
} from './SidebarIconButton';

const SidebarFooter = styled.div(({ theme }) => ({
  paddingTop: theme.spacing.md,
  marginTop: theme.spacing.md,
  borderTop: `1px solid ${
    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
  }`,
}));

function Sidebar() {
  const path = useLocation();
  const theme = useMantineTheme();
  const [activePath, setActivePath] = useState(path.pathname);

  // It is used to control responsive design hidden
  const [isSidebarOn, setIsSidebarOn] =
    useRecoilState<boolean>(isSidebarOnAtom);

  useLayoutEffect(() => {
    setActivePath(path.pathname);
  }, [path]);

  const onClickNavLink = (linkPath: string) => {
    setActivePath(linkPath);
    setIsSidebarOn(false);
  };

  return (
    <Navbar
      p="md"
      hidden={!isSidebarOn}
      hiddenBreakpoint="sm"
      width={{ sm: 250, lg: 300 }}
    >
      <Navbar.Section grow component={Stack} spacing="xs">
        <SidebarButtonLink
          title="Home"
          path="/"
          isActive={activePath === '/'}
          onClick={() => {
            onClickNavLink('/');
          }}
          icon={IconDashboard}
        />

        <SidebarButtonLink
          title="Items"
          path="/items"
          isActive={activePath === '/items'}
          onClick={() => {
            onClickNavLink('/items');
          }}
          icon={IconBasket}
        />
      </Navbar.Section>

      <Navbar.Section>
        <SidebarFooter>
          <SidebarIconButton>
            <SidebarIconButtonIconWrapper>
              <IconLogout stroke={2} color={theme.colors.red[5]} />
            </SidebarIconButtonIconWrapper>
            <span>Logout</span>
          </SidebarIconButton>
        </SidebarFooter>
      </Navbar.Section>
    </Navbar>
  );
}

export default Sidebar;
