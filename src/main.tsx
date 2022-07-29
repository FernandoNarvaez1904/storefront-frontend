import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import App from './App';
import relayEnvironment from './RelayEnviroment';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <RelayEnvironmentProvider environment={relayEnvironment}>
          <App />
        </RelayEnvironmentProvider>
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>
);
