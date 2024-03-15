import { useContext } from "react";
import styles from "./NewCollectionDiv.module.css";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.css";
import Input from "components/Input";
import { CollectionsContext } from "context/CollectionContext";
import { useNavigate } from "react-router-dom";
import { DynamicHeaderContext } from "context/DynamicHeaderContext";
import InputFile from "components/InputFile";
import collectionBuilder from "shared/builders/collectionBuilder";
import headerBuilder from "shared/builders/headerBuilder";
import Button from "components/Button";

export default function NewCollectionDiv() {
  const navigate = useNavigate();
  const collectionsContext = useContext(CollectionsContext);
  const { setHeaderData } = useContext(DynamicHeaderContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const collection = collectionBuilder(collectionsContext, []);
    const header = headerBuilder(
      collectionsContext.image,
      collectionsContext.name,
      collectionsContext.description
    );
    collectionsContext.collectionsList.push(collection);
    setHeaderData(header);
    navigate(`/collection/${collectionsContext._id}#${collection.name}`);
  };

  return (
    <form
      className={`${pageStyles.card} ${styles.new_collection}`}
      onSubmit={handleSubmit}
    >
      <Input
        id="collection_name"
        labelText="Collection Name"
        value={collectionsContext.name}
        onChange={(valor) => collectionsContext.setName(valor)}
        className={styles.input}
        required
      />
      <Input
        id="collection_description"
        labelText="Collection Description"
        value={collectionsContext.description}
        onChange={(valor) => collectionsContext.setDescription(valor)}
        className={styles.input}
        required
      />
      <InputFile
        setImage={collectionsContext.setImage}
        labelStyle={styles.fileSelectionArea}
        imageStyle={styles.image}
        inputStyle={styles.fileInput}
      />
      <Button type="submit">Create Collection</Button>
    </form>
  );
}
