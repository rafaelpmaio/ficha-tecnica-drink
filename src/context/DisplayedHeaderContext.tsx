import React, { useState } from "react";
import { IHeader } from "shared/interfaces/IHeader";
import drinkLogo from 'assets/images/drink-logo.png';
import { ICollection } from "shared/interfaces/Collection";
import collectionsJson from 'shared/records/DrinksCollection.json';


interface DynamicHeaderContextProps {
  headerInfos: IHeader,
  setHeaderInfos: (header: IHeader) => void,
  selectedCollection: ICollection,
  setSelectedCollection: (collection: ICollection) => void,
  datalistSelectedId: number,
  setDatalistSelectedId: (id: number) => void,
  inputCollectionName: string,
  setInputCollectionName: (input: string) => void
}

export const DynamicHeaderContext = React.createContext({} as DynamicHeaderContextProps);

const defaultHeader: IHeader = {
  id: 0,
  title: 'Collections',
  image: drinkLogo
}

export const DislpayedHeaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerInfos, setHeaderInfos] = useState<IHeader>(defaultHeader);
  const [selectedCollection, setSelectedCollection] = useState<ICollection>(collectionsJson[0])
  const [datalistSelectedId, setDatalistSelectedId] = useState<number>(0);
  const [inputCollectionName, setInputCollectionName] = useState('');

  return (
    <DynamicHeaderContext.Provider
      value={{
        headerInfos, setHeaderInfos,
        selectedCollection, setSelectedCollection,
        datalistSelectedId, setDatalistSelectedId: setDatalistSelectedId,
        inputCollectionName, setInputCollectionName
      }}
    >
      {children}
    </DynamicHeaderContext.Provider>
  )
} 