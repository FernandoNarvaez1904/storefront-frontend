import { atom } from 'recoil';

export const itemDrawerStateAtom = atom<{
  isOpened: boolean;
  currentItem: string;
}>({
  key: 'itemDrawerState',
  default: {
    isOpened: false,
    currentItem: '',
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
