import { AppShell } from '@mantine/core';
import React from 'react';
import Sidebar from './components/Sidebar';
import './global.css';

function App() {
  return (
    <AppShell padding="md" navbar={<Sidebar />}>
      Hello
    </AppShell>
  );
}

export default App;
