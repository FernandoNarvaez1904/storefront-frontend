import GeneralInformationTabSkeleton from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/components/ItemDrawerInfoTabs/tabs/GeneralInformationTab/GeneralInformationTabSkeleton';
import { Suspense } from 'react';
import GeneralInformationTabDisplay, {
  GeneralInformationTabDisplayProps,
} from './GeneralInformationTabDisplay';

type Props = {} & GeneralInformationTabDisplayProps;

function GeneralInformationTabLoader({ ...displayProps }: Props) {
  return (
    <Suspense fallback={<GeneralInformationTabSkeleton />}>
      <GeneralInformationTabDisplay {...displayProps} />
    </Suspense>
  );
}

export default GeneralInformationTabLoader;
