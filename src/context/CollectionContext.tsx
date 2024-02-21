import React, { useState } from "react";
import { ICollection } from "shared/interfaces/Collection";
import collectionsJson from "shared/records/DrinksCollection.json";

interface CollectionContextProps {
  collectionsList: ICollection[];
  collectionId: number;
  setCollectionId: (id: number) => void;
  collectionName: string;
  setCollectionName: (name: string) => void;
  collectionDescription: string;
  setCollectionDescription: (description: string) => void;
  collectionImage: string;
  setCollectionImage: (image: string) => void;
}

const CollectionsContext = React.createContext({} as CollectionContextProps);

const CollectionsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [collectionsList] = useState<ICollection[]>(collectionsJson);
  const [collectionId, setCollectionId] = useState(0);
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const [collectionImage, setCollectionImage] = useState("");

  return (
    <CollectionsContext.Provider
      value={{
        collectionsList,
        collectionId,
        setCollectionId,
        collectionName,
        setCollectionName,
        collectionDescription,
        setCollectionDescription,
        collectionImage,
        setCollectionImage,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export { CollectionsContext, CollectionsContextProvider };
