import { Skeleton, Stack } from '@mantine/core';

function FormUpdateItemSkeleton() {
  return (
    <Stack>
      <Stack spacing={3}>
        <Skeleton height={21.7} width={50} />
        <Skeleton height={36} width="100%" />
      </Stack>
      <Stack spacing={3}>
        <Skeleton height={21.7} width={50} />
        <Skeleton height={36} width="100%" />
      </Stack>
      <Stack spacing={3}>
        <Skeleton height={21.7} width={50} />
        <Skeleton height={36} width="100%" />
      </Stack>
      <Stack spacing={3}>
        <Skeleton height={21.7} width={50} />
        <Skeleton height={36} width="100%" />
      </Stack>
      <Stack spacing={3}>
        <Skeleton height={21.7} width={50} />
        <Skeleton height={36} width="100%" />
      </Stack>
      <Skeleton height={36} width="100%" />
    </Stack>
  );
}

export default FormUpdateItemSkeleton;
