import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { RelayEnvironmentProvider } from 'react-relay';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Layout from './layout';
import Items from './pages/items';
import relayEnvironment from './RelayEnvironment';

function App() {
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Dashboard</h1>} />
      <Route path="items" element={<Items />} />
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
