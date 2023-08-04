import './styles/index.css';
import DrinkSetupPage from './pages/DrinkSetupPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import CollectionPage from 'pages/CollectionPage';
import CollectionHeader from 'components/CollectionHeader';
import drinksCollectionJson from 'shared/records/DrinksCollection.json'
import React, { useState } from 'react';
import { IHeader } from 'shared/interfaces/IHeader';
import drinkLogo from 'assets/images/drink-logo.png';
import Footer from 'components/Footer';

export const HeaderContext =
  React.createContext<[IHeader, React.Dispatch<React.SetStateAction<IHeader>>] | []>([]);

function App() {
  const defaultHeader: IHeader = {
    title: 'COLLECTIONS',
    image: drinkLogo
  }
  const [headerInfos, setHeaderInfos] = useState<IHeader>(defaultHeader);

  return (
    <BrowserRouter>
      <Menu />
      <HeaderContext.Provider value={[headerInfos, setHeaderInfos]}>
        <Routes>
          <Route path='/' element={<CollectionHeader />}>
            <Route index element={<Home />} />
            <Route path='collection/:id' element={<CollectionPage drinksCollections={drinksCollectionJson} />} />
          </Route>
          <Route path="drink" element={<DrinkSetupPage />} />
          {/* <Route path="*" element={ } /> futuro erro 404  */}
        </Routes>
      </HeaderContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
