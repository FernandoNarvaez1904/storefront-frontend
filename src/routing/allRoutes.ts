import { MantineColor } from '@mantine/core';
import PointOfSale from 'apps/pointOfSale';
import { Cash, Icon } from 'tabler-icons-react';

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
];

export default allRoutes;
