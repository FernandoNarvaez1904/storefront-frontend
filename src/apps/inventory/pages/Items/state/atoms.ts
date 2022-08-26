import { atom } from 'recoil';

export const itemDrawerStateAtom = atom<{
  isOpened: boolean;
  currentItem: string;
  isEditMode: boolean;
}>({
  key: 'itemDrawerState',
  default: {
    isOpened: false,
    currentItem: '',
    isEditMode: false,
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
