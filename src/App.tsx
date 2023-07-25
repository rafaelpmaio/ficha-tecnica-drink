import './styles/index.css';
import DrinkSetupPage from './pages/DrinkSetupPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DrinkSetupPage />} />
        <Route path="*" element={<Home />} /> /*futuro erro 404*/
      </Routes>
    </BrowserRouter>
  );
}

export default App;
