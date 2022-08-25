import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function Inventory() {
  return (
    <RecoilRoot>
      <Outlet />
    </RecoilRoot>
  );
}

export default Inventory;
