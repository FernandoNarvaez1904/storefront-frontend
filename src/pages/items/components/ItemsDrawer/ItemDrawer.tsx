import React from 'react';
import { useRecoilState } from 'recoil';
import DefaultDrawer from '../../../../components/DefaultDrawer';
import { itemDrawerState } from '../../state/atoms';

const ItemsTableDrawerContent = React.lazy(
  () => import('./ItemsTableDrawerContent')
);

function ItemDrawer() {
  const [drawerState, setDrawerState] = useRecoilState(itemDrawerState);
  return (
    <DefaultDrawer
      title={`Item ${drawerState.title}`}
      isOpen={drawerState.isOpen}
      onClose={() => setDrawerState((prev) => ({ ...prev, isOpen: false }))}
    >
      {drawerState.node && (
        <ItemsTableDrawerContent itemRef={drawerState.node} />
      )}
    </DefaultDrawer>
  );
}

export default ItemDrawer;
