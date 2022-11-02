import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoaderInCenter from './components/LoaderInCenter';
import Layout from './layout';
import relayEnvironment from './RelayEnvironment';

const Items = React.lazy(() => import('./pages/items'));

function App() {
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Dashboard</h1>} />
      <Route
        path="items"
        element={
          <Suspense fallback={<LoaderInCenter />}>
            <Items />
          </Suspense>
        }
      />
    </Route>
  );
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
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
