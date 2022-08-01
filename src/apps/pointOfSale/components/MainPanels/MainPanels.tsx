import 'apps/pointOfSale/assets/Split.js.css';
import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import Split from 'react-split';
import CurrentOrderPanel from '../CurrentOrderPanel';
import ItemGridPanel from '../ItemGridPanel';
import { MainPanels_ConfQuery } from './__generated__/MainPanels_ConfQuery.graphql';
import useMainPanelStyles from './MainPanelStyles';

const confQuery = graphql`
  query MainPanels_ConfQuery {
    pointOfSaleConf {
      gridType
    }
  }
`;

function MainPanels() {
  const dataConf = useLazyLoadQuery<MainPanels_ConfQuery>(confQuery, {});
  const { classes } = useMainPanelStyles();
  const isImageGrid = dataConf.pointOfSaleConf.gridType === 'ImageGrid';

  return (
    <Split
      className={classes.root}
      sizes={[30, 70]}
      gutterSize={22}
      minSize={[450, isImageGrid ? 650 : 710]}
      gutterAlign="center"
    >
      <CurrentOrderPanel />
      <ItemGridPanel />
    </Split>
  );
}

export default MainPanels;
