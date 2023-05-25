import { Divider, Group, Stack, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ReactNode } from 'react';

interface ItemInfoTabSectionProps {
  title: string;
  children: ReactNode;
}

function ItemInfoTabSection({ title, children }: ItemInfoTabSectionProps) {
  const theme = useMantineTheme();
  const isScreenSM = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  return (
    <Stack spacing="xs">
      <Stack spacing={0}>
        <Group spacing="xs">
          <Title order={isScreenSM ? 3 : 4}>{title}</Title>
        </Group>
        <Divider />
      </Stack>
      {children}
    </Stack>
  );
}

export default ItemInfoTabSection;
