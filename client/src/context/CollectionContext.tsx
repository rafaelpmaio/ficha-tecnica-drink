import React, { useState } from "react";
import { ICollection } from "shared/interfaces/Collection";
import collectionsJson from "shared/records/DrinksCollection.json";

interface CollectionContextProps {
  collectionsList: ICollection[];
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
  const [collectionsList] = useState<ICollection[]>(collectionsJson);
  const [selectedCollection, setSelectedCollection] = useState<ICollection>(
    collectionsJson[0]
  );

  return (
    <CollectionsContext.Provider
      value={{
        collectionsList,
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
