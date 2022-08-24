import { atom } from 'recoil';

export const itemsTableFilterAtom = atom<{
  type: 'name' | 'barcode' | 'sku';
  value: '';
}>({
  key: 'itemsTableFilter',
  default: {
    type: 'name',
    value: '',
  },
});
