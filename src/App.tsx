import Layout from 'components/Layout';
import GlobalProviders from 'GlobalProviders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import allRoutes, { AppRoute } from 'routing/allRoutes';
import './global.css';

function App() {
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
    <GlobalProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout allRoutes={allRoutes} />}>
            {getAppsRoutes()}
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProviders>
  );
}

export default App;
