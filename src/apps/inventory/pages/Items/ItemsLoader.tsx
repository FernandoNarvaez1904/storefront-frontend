import ItemsDisplay from 'apps/inventory/pages/Items/ItemsDisplay';
import { useEffect } from 'react';
import { graphql, useQueryLoader } from 'react-relay';
import { RecoilRoot } from 'recoil';
import { ItemsLoader_ItemsPageQuery } from './__generated__/ItemsLoader_ItemsPageQuery.graphql';

const itemsPageQuery = graphql`
  query ItemsLoader_ItemsPageQuery {
    itemConnection {
      ...TbodyItemsTableDisplay_AllItemFragment
      ...HeaderItemsTableDisplay_ItemCountFragment
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

  useEffect(() => {
    loader({});
  }, [loader]);

  return (
    <RecoilRoot>{queryRef && <ItemsDisplay queryRef={queryRef} />}</RecoilRoot>
  );
}

export default ItemsLoader;
