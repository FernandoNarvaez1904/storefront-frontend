import { ItemsLoader_ItemsPageQuery } from 'apps/inventory/pages/Items/__generated__/ItemsLoader_ItemsPageQuery.graphql';
import ItemsTableContentSkeleton from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemsTableContent/ItemsTableContentSkeleton';
import { Suspense } from 'react';
import { PreloadedQuery } from 'react-relay';
import ItemsTableContentDisplay, {
  ItemsTableContentDisplayProps,
} from './ItemsTableContentDisplay';

type Props = {
  queryRef: PreloadedQuery<ItemsLoader_ItemsPageQuery>;
} & ItemsTableContentDisplayProps;

function ItemsTableContentLoader({ queryRef, ...props }: Props) {
  return (
    <Suspense fallback={<ItemsTableContentSkeleton />}>
      <ItemsTableContentDisplay queryRef={queryRef} {...props} />
    </Suspense>
  );
}

export default ItemsTableContentLoader;
