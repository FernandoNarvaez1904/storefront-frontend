import { useRecoilValue } from 'recoil';
import Split from 'react-split';
import React from 'react';
import { gridType } from '../../state/Atoms';
import CurrentOrderPanel from '../CurrentOrderPanel';
import ItemGridPanel from '../ItemGridPanel';
import '../../assets/Split.js.css';

function MainPanels() {
  const gridKind = useRecoilValue(gridType);

  return (
    <Split
      style={{
        display: 'flex',
        flexGrow: 1,
      }}
      sizes={[30, 70]}
      gutterSize={22}
      minSize={[450, gridKind === 'ImageGrid' ? 650 : 710]}
      gutterAlign="center"
    >
      <CurrentOrderPanel />
      <ItemGridPanel />
    </Split>
  );
}

export default MainPanels;
