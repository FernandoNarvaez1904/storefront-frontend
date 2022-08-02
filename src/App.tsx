import PointOfSale from 'apps/pointOfSale';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PointOfSale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
