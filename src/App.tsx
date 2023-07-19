import './styles/index.css';
import PaginaInicial from './pages/PaginaInicial'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="*" element={<PaginaInicial />} /> /*futuro erro 404*/
      </Routes>
    </BrowserRouter>
  );
}

export default App;
