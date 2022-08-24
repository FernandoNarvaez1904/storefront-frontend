import { IconBasket, IconBuildingWarehouse, IconGauge } from '@tabler/icons';
import Inventory from 'apps/inventory';
import Dashboard from 'apps/inventory/pages/Dashboard';
import { AppRoute } from 'routing/allRoutes';
import Items from './pages/Items';

const route: AppRoute = {
  title: 'Inventory',
  path: '/inventory',
  color: 'red',
  icon: IconBuildingWarehouse,
  element: Inventory,
  subRoutes: [
    {
      title: 'Dashboard',
      path: '/inventory',
      color: 'gray',
      icon: IconGauge,
      element: Dashboard,
      hasSidebar: false,
      hasHomeGridTile: false,
    },
    {
      title: 'Items',
      path: '/inventory/items',
      color: 'gray',
      icon: IconBasket,
      element: Items,
      hasSidebar: false,
      hasHomeGridTile: false,
    },
  ],
  hasSidebar: true,
  hasHomeGridTile: true,
};

export default route;
