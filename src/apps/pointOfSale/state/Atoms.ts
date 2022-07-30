import { atom } from 'recoil';

export const filterItemValue = atom<{
  kind: 'name' | 'barcode' | 'sku';
  value: string;
}>({
  key: 'filterItemValue',
  default: { kind: 'name', value: '' },
});
