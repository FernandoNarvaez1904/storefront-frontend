import { atom } from 'recoil';

export const filterItemValue = atom<{
  kind: 'name' | 'barcode' | 'sku';
  value: string;
}>({
  key: 'filterItemValue',
  default: { kind: 'name', value: '' },
});

export type GridType = 'ImageGrid' | 'TextGrid';
export const gridType = atom<GridType>({
  key: 'gridType',
  default: 'ImageGrid',
});
