import { ItemsLoader_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsLoader_ItemsPageQuery.graphql';
import { Suspense } from 'react';
import { PreloadedQuery } from 'react-relay';
import HeaderItemsTableDisplay from './HeaderItemsTableDisplay';
import HeaderItemsTableSkeleton from './HeaderItemsTableSkeleton';

type Props = {
  queryRef: PreloadedQuery<ItemsLoader_ItemsPageQuery>;
};

function HeaderItemsTableLoader({ queryRef }: Props) {
  return (
    <Suspense fallback={<HeaderItemsTableSkeleton />}>
      <HeaderItemsTableDisplay queryRef={queryRef} />
    </Suspense>
  );
}

export default HeaderItemsTableLoader;
