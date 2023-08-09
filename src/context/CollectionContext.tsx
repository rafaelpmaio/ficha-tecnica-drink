import React, { useState } from "react";
import { IDrink } from "shared/interfaces/IDrink";
import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";
import collectionsJson from 'shared/records/DrinksCollection.json';

interface CollectionContextProps {
    collectionsList: IDrinksCollection[],
    selectedCollection: IDrinksCollection,
    setSelectedCollection: (collection: IDrinksCollection) => void,
    datalistSelectedId: number,
    copyDatalistSelectedId: (id: number) => void,
}

export const CollectionsContext = React.createContext({} as CollectionContextProps);

export const CollectionsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [collectionsList] = useState<IDrinksCollection[]>(collectionsJson)
    const [selectedCollection, setSelectedCollection] = useState<IDrinksCollection>(collectionsJson[0])
    const [datalistSelectedId, copyDatalistSelectedId] = useState<number>(0);

    return (
        <CollectionsContext.Provider value={{
            collectionsList,
            datalistSelectedId, copyDatalistSelectedId,
            selectedCollection, setSelectedCollection 
        }}>
            {children}
        </CollectionsContext.Provider>
    )
};
