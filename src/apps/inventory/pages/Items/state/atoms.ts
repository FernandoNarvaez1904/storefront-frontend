import { atom } from 'recoil';

export const drawerStateAtom = atom({
  key: 'drawerState',
  default: {
    isOpened: true,
  },
});

export const itemsTableFilterAtom = atom<{
  type: 'name' | 'barcode' | 'sku';
  value: string;
}>({
  key: 'itemsTableFilter',
  default: {
    type: 'name',
    value: '',
  },
});
