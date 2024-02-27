import styles from "./CollectionDatalist.module.css";
import { useContext, useState } from "react";
import DataList from "components/DataList";
import { CollectionsContext } from "context/CollectionContext";
import { handleImageFormat } from "shared/utils/handleImageFormat";
import getFromList from "shared/functions/collection/getFromList";

export default function CollectionDatalist() {
  const [inputCollectionName, setInputCollectionName] = useState("");
  const { collectionsList, selectedCollection, setSelectedCollection } = useContext(CollectionsContext);

  const handleChange = (value: string) => {
    let inputedId = Number(value.substring(0, value.indexOf(".")));
    const collection = getFromList(inputedId, collectionsList)
    if (collection) setSelectedCollection(collection)
    setInputCollectionName(value);
  };

  return (
    <div className={styles.collection_datalist_div}>
      <img
        className={`${styles.drink_header_image} ${
          selectedCollection.id === 0
            ? styles.default_img
            : styles.collection_img
        }`}
        src={handleImageFormat(selectedCollection.image, "collections")}
        alt={`${selectedCollection.name}`}
      />
      <DataList
        arr={collectionsList}
        value={inputCollectionName}
        onChange={handleChange}
        label="Collections"
        datalistId={"collections_list"}

      />
    </div>
  );
}