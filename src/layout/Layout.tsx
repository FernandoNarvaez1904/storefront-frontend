import styled from '@emotion/styled';
import {
  AppShell,
  Box,
  BoxProps,
  createPolymorphicComponent,
  Stack,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const FullHeightStack = styled(Stack)`
  height: 100%;
`;

const GrowOnEmptyFlexSpace = createPolymorphicComponent<'div', BoxProps>(styled(
  Box
)`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing.xs}px;
`);

function Layout() {
  return (
    <AppShell padding={0} navbar={<Sidebar />} header={<Header />}>
      <FullHeightStack spacing="xs">
        <GrowOnEmptyFlexSpace>
          <Outlet />
        </GrowOnEmptyFlexSpace>
      </FullHeightStack>
    </AppShell>
  );
}

export default Layout;
