import { graphql, useLazyLoadQuery } from 'react-relay';
import React from 'react';
import HeaderPOS from '../HeaderPOS';
import MainPanels from '../MainPanels';
import FooterPOS from '../FooterPOS';
import { PosRelayRootLoader_ConfQuery } from './__generated__/PosRelayRootLoader_ConfQuery.graphql';

const confQuery = graphql`
  query PosRelayRootLoader_ConfQuery {
    pointOfSaleConf {
      ...MainPanels_ConfFragment
    }
  }
`;

function PosRelayRootLoader() {
  const dataConf = useLazyLoadQuery<PosRelayRootLoader_ConfQuery>(
    confQuery,
    {}
  );

  return (
    <>
      <HeaderPOS />
      <MainPanels confFragmentRef={dataConf.pointOfSaleConf} />;
      <FooterPOS />
    </>
  );
}

export default PosRelayRootLoader;
