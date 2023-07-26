import './styles/index.css';
import DrinkSetupPage from './pages/DrinkSetupPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import CollectionPage from 'pages/CollectionPage';
import CollectionHeader from 'components/CollectionHeader';
import drinksCollectionJson from 'shared/records/DrinksCollection.json'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<CollectionHeader />}>
          <Route path="/" element={<Home />} />
          <Route path='/collection/:id' element={<CollectionPage drinksCollection={drinksCollectionJson[1]}/>} />
        </Route>
        <Route path="/drink" element={<DrinkSetupPage />} /> /*futuro erro 404*/
        {/* <Route path="*" element={ } /> futuro erro 404  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
