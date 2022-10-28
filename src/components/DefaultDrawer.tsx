import { useTheme } from '@emotion/react';
import { Drawer, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ReactNode } from 'react';

interface DefaultDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

function DefaultDrawer({
  isOpen,
  onClose,
  title,
  children,
}: DefaultDrawerProps) {
  const theme = useTheme();
  const isScreenSM = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  return (
    <Drawer
      opened={isOpen}
      title={<Title order={2}>{title}</Title>}
      size={isScreenSM ? 'md' : 'xl'}
      padding="xl"
      position="right"
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
}

export default DefaultDrawer;
