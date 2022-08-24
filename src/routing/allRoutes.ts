import { MantineColor } from '@mantine/core';
import { IconHome, TablerIcon } from '@tabler/icons';
import inventoryRoute from 'apps/inventory/routes';
import posRoute from 'apps/pointOfSale/routes';
import Home from 'pages/Home';

export interface AppRoute {
  path: string;
  title: string;
  icon: TablerIcon;
  color: MantineColor;
  element: () => JSX.Element;
  hasSidebar: boolean;
  // Default sub route must be the same of path
  subRoutes?: Array<AppRoute>;
  hasHomeGridTile: boolean;
}

const allRoutes: Array<AppRoute> = [
  { ...posRoute },
  { ...inventoryRoute },
  {
    title: 'Home',
    path: '/',
    color: 'blue',
    icon: IconHome,
    element: Home,
    hasSidebar: false,
    hasHomeGridTile: false
  },

];

export default allRoutes;
