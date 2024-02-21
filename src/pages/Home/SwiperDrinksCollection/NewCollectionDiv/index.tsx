import { useContext, useEffect } from "react";
import styles from "./NewCollectionDiv.module.css";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.css";
import Input from "components/Input";
import ButtonSubmit from "components/ButtonSubmit";
import { CollectionsContext } from "context/CollectionContext";
import { useNavigate } from "react-router-dom";
import { DynamicHeaderContext } from "context/DisplayedHeaderContext";
import InputFile from "components/InputFile";
import collectionBuilder from "shared/builders/collectionBuilder";
import headerBuilder from "shared/builders/headerBuilder";

export default function NewCollectionDiv() {

  const collectionsContext = useContext(CollectionsContext);
  const { setHeaderInfos } = useContext(DynamicHeaderContext);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const collection = collectionBuilder(
      collectionsContext.collectionId,
      collectionsContext.collectionImage,
      collectionsContext.collectionName,
      collectionsContext.collectionDescription
    );
    const header = headerBuilder(
      collectionsContext.collectionImage,
      collectionsContext.collectionName,
      collectionsContext.collectionDescription
    );
    collectionsContext.collectionsList.push(collection);
    setHeaderInfos(header);
    navigate(
      `/collection/${collectionsContext.collectionId}#${collection.name}`
    );
  };

  // useEffect(() =>
  //   collectionsContext.setCollectionId(collectionsContext.collectionsList.length)
  // );

  return (
    <form
      className={`${pageStyles.card} ${styles.new_collection}`}
      onSubmit={handleSubmit}
    >
      <Input
        id="collection_name"
        labelText="Collection Name"
        value={collectionsContext.collectionName}
        onChange={(valor) => collectionsContext.setCollectionName(valor)}
        className={styles.input}
        required
      />
      <Input
        id="collection_description"
        labelText="Collection Description"
        value={collectionsContext.collectionDescription}
        onChange={(valor) => collectionsContext.setCollectionDescription(valor)}
        className={styles.input}
        required
      />
      <InputFile
        setImage={collectionsContext.setCollectionImage}
        classNameSelectionLabel={styles.fileSelectionArea}
        classNameImage={styles.image}
        classNameInput={styles.fileInput}
      />
      <ButtonSubmit buttonValue="Create Collection" className={styles.button} />
    </form>
  );
}
