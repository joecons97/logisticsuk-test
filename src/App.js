import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout'
import Index from './routes/pages/index';
import Drivers from './routes/pages/drivers';
import Vehicles from './routes/pages/vehicles';
import About from './routes/pages/about';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
