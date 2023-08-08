import './styles/index.css';
import DrinkSetupPage from './pages/DrinkSetupPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import CollectionPage from 'pages/CollectionPage';
import MainHeader from 'components/MainHeader';
import Footer from 'components/Footer';
import { DislpayedHeaderContextProvider } from 'context/DisplayedHeaderContext';
import { DrinkCreationContextProvider } from 'context/DrinkCreationContext';
import { CollectionsContextProvider } from 'context/CollectionContext';


function App() {
  return (
    <BrowserRouter>
      <CollectionsContextProvider>
        <DrinkCreationContextProvider>
          <NavMenu />
          <DislpayedHeaderContextProvider>
            <Routes>
              <Route path='/' element={<MainHeader />}>
                <Route index element={<Home />} />
                <Route path='collection/:id' element={<CollectionPage/>} />
              </Route>
              <Route path="drink" element={<DrinkSetupPage />} />
              {/* <Route path="*" element={ } /> futuro erro 404  */}
            </Routes>
          </DislpayedHeaderContextProvider>
        </DrinkCreationContextProvider>
      </CollectionsContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
