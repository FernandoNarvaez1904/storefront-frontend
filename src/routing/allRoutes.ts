import { MantineColor } from '@mantine/core';
import Inventory from 'apps/inventory';
import PointOfSale from 'apps/pointOfSale';
import { BuildingWarehouse, Cash, Icon } from 'tabler-icons-react';

export interface AppRoute {
  path: string;
  title: string;
  color: MantineColor;
  icon: Icon;
  element: () => JSX.Element;
}

const allRoutes: Array<AppRoute> = [
  {
    title: 'Point of Sale',
    path: '/pos',
    color: 'green',
    icon: Cash,
    element: PointOfSale,
  },
  {
    title: 'Inventory',
    path: 'inventory',
    color: 'red',
    icon: BuildingWarehouse,
    element: Inventory,
  },
];

export default allRoutes;
