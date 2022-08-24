import { AppShell, Box, Stack } from '@mantine/core';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { useLayoutEffect, useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from 'routing/allRoutes';

type Props = {
  allRoutes: Array<AppRoute>;
};

function Layout({ allRoutes }: Props) {
  const location = useLocation();
  const currentAppRoute = location.pathname.split('/')[1];
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // type { appName: route.hasSidebar} where hasSidebar is a boolean
  const sidebarRoutes: Record<string, AppRoute> = useMemo(() => {
    let tempSidebarRoutes: Record<string, AppRoute> = {};

    allRoutes.forEach((route) => {
      // slicing if for deleting the / from the path
      const appName = route.path.slice(1);
      // updating with new appName: hasSidebar
      tempSidebarRoutes = {
        [appName]: { ...route },
        ...tempSidebarRoutes,
      };
    });

    return tempSidebarRoutes;
  }, [allRoutes]);

  // Determines if current location uses sidebar
  useLayoutEffect(() => {
    setIsSidebarActive(sidebarRoutes[currentAppRoute].hasSidebar);
  }, [allRoutes, sidebarRoutes, currentAppRoute]);

  return (
    <AppShell
      navbar={
        isSidebarActive ? (
          <Sidebar route={sidebarRoutes[currentAppRoute]} />
        ) : undefined
      }
      padding={0}
    >
      <Stack sx={{ height: '100%' }} spacing="xs">
        <Header />

        <Box sx={{ flexGrow: 1 }}>
          {/* Renders the content inside Sub-Route */}
          <Outlet />
        </Box>
      </Stack>
    </AppShell>
  );
}

export default Layout;
