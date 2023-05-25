import { atom } from 'recoil';
import { InformationTabFragment$key } from '../components/ItemsDrawer/tabs/InformationTab/__generated__/InformationTabFragment.graphql';

export const tableGlobalFilter = atom<string>({
  key: 'tableGlobalFilter',
  default: '',
});

interface DrawerStateInterface {
  isOpen: boolean;
  title: string;
  node?: InformationTabFragment$key | null;
}

export const itemDrawerState = atom<DrawerStateInterface>({
  key: 'itemDrawerState',
  default: {
    isOpen: false,
    title: '',
    node: null,
  },
});
