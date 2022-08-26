import { Suspense } from 'react';
import ItemDrawerTitleDisplay, {
  ItemDrawerTitleDisplayProps,
} from './ItemDrawerTitleDisplay';
import ItemDrawerTitleSkeleton from './ItemDrawerTitleSkeleton';

type Props = {} & ItemDrawerTitleDisplayProps;

function ItemDrawerTitleLoader({ closeDrawer, ...displayProps }: Props) {
  return (
    <Suspense fallback={<ItemDrawerTitleSkeleton closeDrawer={closeDrawer} />}>
      <ItemDrawerTitleDisplay closeDrawer={closeDrawer} {...displayProps} />
    </Suspense>
  );
}

export default ItemDrawerTitleLoader;
