import React, { useState } from "react";
import { ICollection } from "shared/interfaces/Collection";
import collectionsJson from "shared/records/DrinksCollection.json";

interface CollectionContextProps {
  collectionsList: ICollection[];
  setCollectionsList: (list: ICollection[]) => void,
  id: number;
  setId: (id: number) => void;
  name: string;
  setName: (name: string) => void;
  description: string;
  setDescription: (description: string) => void;
  image: string;
  setImage: (image: string) => void;
  selectedCollection: ICollection;
  setSelectedCollection: (collection: ICollection) => void;
}

const CollectionsContext = React.createContext({} as CollectionContextProps);

const CollectionsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [collectionsList, setCollectionsList] = useState<ICollection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<ICollection>(
    collectionsJson[0]
  );

  return (
    <CollectionsContext.Provider
      value={{
        collectionsList,
        setCollectionsList,
        id,
        setId,
        name,
        setName,
        description,
        setDescription,
        image,
        setImage,
        selectedCollection,
        setSelectedCollection,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export { CollectionsContext, CollectionsContextProvider };
