import { AppShell, Box, Stack } from '@mantine/core';
import Header from 'apps/inventory/components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function Inventory() {
  return (
    <AppShell navbar={<Sidebar />} padding={0}>
      <Stack sx={{ height: '100%' }}>
        <Header />
        <Box p="xs" sx={{ flexGrow: 1 }}>
          {/* Renders the content inside Sub-Route */}
          <Outlet />
        </Box>
      </Stack>
    </AppShell>
  );
}

export default Inventory;
