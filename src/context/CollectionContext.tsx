import React, { useState } from "react";
import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";
import collectionsJson from 'shared/records/DrinksCollection.json';

interface CollectionContextProps {
    collectionsList: IDrinksCollection[],
    datalistSelectedId: number,
    copyDatalistSelectedId: (id: number) => void,
}

export const CollectionsContext = React.createContext({} as CollectionContextProps);

export const CollectionsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [collectionsList] = useState<IDrinksCollection[]>(collectionsJson)
    const [datalistSelectedId, copyDatalistSelectedId] = useState<number>(0);

    return (
        <CollectionsContext.Provider value={{
            collectionsList,
            datalistSelectedId, copyDatalistSelectedId,
        }}>
            {children}
        </CollectionsContext.Provider>
    )
};
