import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import Home from 'pages/Home';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import relayEnvironment from 'RelayEnviroment';
import allRoutes, { AppRoute } from 'routing/allRoutes';
import './global.css';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'colorScheme',
    defaultValue: 'light',
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const getAppsRoutes = () =>
    allRoutes.map((appRoute: AppRoute) => (
      <Route
        path={appRoute.path}
        element={<appRoute.element />}
        key={appRoute.path}
      >
        {appRoute.subRoutes?.map((subRoute: AppRoute) => (
          <Route
            path={subRoute.path}
            element={<subRoute.element />}
            key={subRoute.path}
          />
        ))}
      </Route>
    ));

  return (
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
          <RelayEnvironmentProvider environment={relayEnvironment}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                {getAppsRoutes()}
              </Routes>
            </BrowserRouter>
          </RelayEnvironmentProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
