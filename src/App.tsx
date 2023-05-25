import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import React, { Suspense } from 'react';
import { loadQuery, RelayEnvironmentProvider } from 'react-relay';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoaderInCenter from './components/LoaderInCenter';
import Layout from './layout';
import relayEnvironment from './RelayEnvironment';
import ItemsQueryGraphql from './pages/items/__generated__/ItemsQuery.graphql';

const Items = React.lazy(() => import('./pages/items'));

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <h1>Dashboard</h1>,
        },
        {
          path: 'items',
          element: (
            <Suspense fallback={<LoaderInCenter />}>
              <Items />
            </Suspense>
          ),
          loader: async () => {
            return loadQuery(relayEnvironment, ItemsQueryGraphql, {});
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

function WrappedApp() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'colorScheme',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <RecoilRoot>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <NotificationsProvider position="top-right">
              <App />
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </RecoilRoot>
    </RelayEnvironmentProvider>
  );
}

export default WrappedApp;
