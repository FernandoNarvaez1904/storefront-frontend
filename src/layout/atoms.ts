import { atom } from 'recoil';

export const isSidebarOnAtom = atom<boolean>({
  key: 'isSidebarOn',
  default: false,
});
