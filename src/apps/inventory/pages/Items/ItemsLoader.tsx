import { ItemsLoader_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsLoader_ItemsPageQuery.graphql';
import ItemsDisplay from 'apps/inventory/pages/Items/ItemsDisplay';
import { useLayoutEffect } from 'react';
import { graphql, useQueryLoader } from 'react-relay';
import { RecoilRoot } from 'recoil';

const itemsPageQuery = graphql`
  query ItemsLoader_ItemsPageQuery {
    itemConnection {
      ...TbodyItemsTableDisplay_AllItemFragment
      ...TotalCountBadgeDisplay_ItemCountFragment

      # This is included to not force loading, when entering pos
      # It does not lead to any queryRef, because the fragment is called
      # in its own component via useLazyLoadQuery
      edges {
        node {
          ...ItemDrawerContent_SingleItemFragment
          ...FormUpdateItem_ItemFragment
        }
      }
    }
  }
`;

function ItemsLoader() {
  const [queryRef, loader] =
    useQueryLoader<ItemsLoader_ItemsPageQuery>(itemsPageQuery);

  useLayoutEffect(() => {
    loader({});
  });

  return (
    <RecoilRoot>{queryRef && <ItemsDisplay queryRef={queryRef} />}</RecoilRoot>
  );
}

export default ItemsLoader;
