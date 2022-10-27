import { atom } from 'recoil';

export const tableGlobalFilter = atom<string>({
  key: 'tableGlobalFilter',
  default: '',
});
