import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import allRoutes from 'routing/allRoutes';
import './global.css';

function App() {
  const getAppRoutes = () =>
    allRoutes.map((el) => <Route path={el.path} element={<el.element />} />);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {getAppRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
