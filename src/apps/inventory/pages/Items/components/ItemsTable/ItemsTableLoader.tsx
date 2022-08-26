import { Suspense } from 'react';
import { PreloadedQuery } from 'react-relay';
import { ItemsLoader_ItemsPageQuery } from '../../__generated__/ItemsLoader_ItemsPageQuery.graphql';
import ItemsTableDisplay from './ItemsTableDisplay';
import ItemsTableSkeleton from './ItemsTableSkeleton';

type Props = {
  queryRef: PreloadedQuery<ItemsLoader_ItemsPageQuery>;
};

function ItemsTableLoader({ queryRef }: Props) {
  return (
    <Suspense fallback={<ItemsTableSkeleton />}>
      <ItemsTableDisplay queryRef={queryRef} />
    </Suspense>
  );
}

export default ItemsTableLoader;
