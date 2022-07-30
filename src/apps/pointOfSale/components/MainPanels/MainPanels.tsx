import Split from 'react-split';
import React from 'react';
import { graphql, useFragment } from 'react-relay';
import CurrentOrderPanel from '../CurrentOrderPanel';
import ItemGridPanel from '../ItemGridPanel';
import '../../assets/Split.js.css';
import { MainPanels_ConfFragment$key } from './__generated__/MainPanels_ConfFragment.graphql';

const dataConf = graphql`
  fragment MainPanels_ConfFragment on PointOfSaleConfType {
    gridType
    ...ItemGridConfBar_ConfFragment
    ...ItemGrid_ConfFragment
  }
`;

type Props = {
  confFragmentRef: MainPanels_ConfFragment$key;
};

function MainPanels({ confFragmentRef }: Props) {
  const gridType = useFragment<MainPanels_ConfFragment$key>(
    dataConf,
    confFragmentRef
  );

  return (
    <Split
      style={{
        display: 'flex',
        flexGrow: 1,
      }}
      sizes={[30, 70]}
      gutterSize={22}
      minSize={[450, gridType.gridType === 'ImageGrid' ? 650 : 710]}
      gutterAlign="center"
    >
      <CurrentOrderPanel />
      <ItemGridPanel confFragmentRef={gridType} />
    </Split>
  );
}

export default MainPanels;
