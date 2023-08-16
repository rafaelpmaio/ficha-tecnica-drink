import React, { useState } from "react";
import { IHeader } from "shared/interfaces/IHeader";
import drinkLogo from 'assets/images/drink-logo.png';
import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";
import collectionsJson from 'shared/records/DrinksCollection.json';


interface DisplayedHeaderContextProps {
  headerInfos: IHeader,
  setHeaderInfos: (header: IHeader) => void,
  selectedCollection: IDrinksCollection,
  setSelectedCollection: (collection: IDrinksCollection) => void,
  datalistSelectedId: number,
  copyDatalistSelectedId: (id: number) => void,
  inputCollectionName: string,
  setInputCollectionName: (input: string) => void
}

export const DisplayedHeaderContext = React.createContext({} as DisplayedHeaderContextProps);

const defaultHeader: IHeader = {
  title: 'Collections',
  image: drinkLogo
}

export const DislpayedHeaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerInfos, setHeaderInfos] = useState<IHeader>(defaultHeader);
  const [selectedCollection, setSelectedCollection] = useState<IDrinksCollection>(collectionsJson[0])
  const [datalistSelectedId, copyDatalistSelectedId] = useState<number>(0);
  const [inputCollectionName, setInputCollectionName] = useState('');

  return (
    <DisplayedHeaderContext.Provider
      value={{
        headerInfos, setHeaderInfos,
        selectedCollection, setSelectedCollection,
        datalistSelectedId, copyDatalistSelectedId,
        inputCollectionName, setInputCollectionName
      }}
    >
      {children}
    </DisplayedHeaderContext.Provider>
  )
} 