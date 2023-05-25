import { Suspense } from 'react';
import FormUpdateItemDisplay, {
  FormUpdateItemDisplayProps,
} from './FormUpdateItemDisplay';
import FormUpdateItemSkeleton from './FormUpdateItemSkeleton';

type Props = {} & FormUpdateItemDisplayProps;

function FormUpdateItemLoader({ ...displayProps }: Props) {
  return (
    <Suspense fallback={<FormUpdateItemSkeleton />}>
      <FormUpdateItemDisplay {...displayProps} />
    </Suspense>
  );
}

export default FormUpdateItemLoader;
