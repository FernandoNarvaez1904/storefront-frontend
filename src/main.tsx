import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import App from './App';
import relayEnvironment from './RelayEnviroment';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <NotificationsProvider position="top-right">
      <RelayEnvironmentProvider environment={relayEnvironment}>
        <App />
      </RelayEnvironmentProvider>
    </NotificationsProvider>
  </MantineProvider>
);
