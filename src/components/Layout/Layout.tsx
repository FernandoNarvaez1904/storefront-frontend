import { AppShell } from '@mantine/core';
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
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // type { appName: route.hasSidebar} where hasSidebar is a boolean
  const sidebarRoutes: Record<string, boolean> = useMemo(() => {
    let tempSidebarRoutes: Record<string, boolean> = {};

    allRoutes.forEach((route) => {
      // slicing if for deleting the / from the path
      const appName = route.path.slice(1);
      // updating with new appName: hasSidebar
      tempSidebarRoutes = {
        [appName]: route.hasSidebar,
        ...tempSidebarRoutes,
      };
    });

    return tempSidebarRoutes;
  }, [allRoutes]);

  // Determines if current location uses sidebar
  useLayoutEffect(() => {
    const rootRoute = location.pathname.split('/')[1];
    setIsSidebarActive(sidebarRoutes[rootRoute]);
  }, [allRoutes, sidebarRoutes, location]);

  return (
    <AppShell
      header={<Header />}
      navbar={isSidebarActive ? <Sidebar route={allRoutes[1]} /> : undefined}
    >
      <Outlet />
    </AppShell>
  );
}

export default Layout;
