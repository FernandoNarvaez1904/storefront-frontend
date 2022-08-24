import { IconCash } from '@tabler/icons';
import PointOfSale from 'apps/pointOfSale/index';
import { AppRoute } from 'routing/allRoutes';

const route: AppRoute = {
  title: 'Point of Sale',
  path: '/pos',
  color: 'green',
  icon: IconCash,
  element: PointOfSale,
  hasSidebar: false,
};

export default route;
