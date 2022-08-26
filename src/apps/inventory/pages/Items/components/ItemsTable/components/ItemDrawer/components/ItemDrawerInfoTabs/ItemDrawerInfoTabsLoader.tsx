import ItemDrawerInfoTabsSkeleton from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/components/ItemDrawerInfoTabs/ItemDrawerInfoTabsSkeleton';
import { Suspense } from 'react';
import ItemDrawerInfoTabsDisplay, {
  ItemDrawerInfoTabsDisplayProps,
} from './ItemDrawerInfoTabsDisplay';

type Props = {} & ItemDrawerInfoTabsDisplayProps;

function ItemDrawerInfoTabsLoader({ ...displayProps }: Props) {
  return (
    <Suspense fallback={<ItemDrawerInfoTabsSkeleton />}>
      <ItemDrawerInfoTabsDisplay {...displayProps} />
    </Suspense>
  );
}

export default ItemDrawerInfoTabsLoader;
