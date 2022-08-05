import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function Inventory() {
  return (
    <AppShell navbar={<Sidebar />}>
      {/* Renders the content inside Sub-Route */}
      <Outlet />
    </AppShell>
  );
}

export default Inventory;
