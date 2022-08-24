import { MantineColor } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';
import inventoryRoute from 'apps/inventory/routes';
import posRoute from 'apps/pointOfSale/routes';

export interface AppRoute {
  path: string;
  title: string;
  icon: TablerIcon;
  color: MantineColor;
  element: () => JSX.Element;
  hasSidebar: boolean;
  // Default sub route must be the same of path
  subRoutes?: Array<AppRoute>;
}

const allRoutes: Array<AppRoute> = [{ ...posRoute }, { ...inventoryRoute }];

export default allRoutes;
