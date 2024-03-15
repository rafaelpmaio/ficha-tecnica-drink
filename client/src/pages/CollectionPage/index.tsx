import DrinkDisplay from "pages/CollectionPage/DrinkDisplay";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.css";
import styles from "./CollectionPage.module.css";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CollectionsContext } from "context/CollectionContext";
import getFromList from "shared/utils/getFromList";

export default function CollectionPage() {
  const { collectionsList } = useContext(CollectionsContext);

  const params = useParams();
  let paramsCollectionId = params.id;

  let collection = getFromList(paramsCollectionId, collectionsList);

  if (!collection) {
    collection = collectionsList[0];
  }

  let drinkList = collection.drinksList;
  let collectionId = collection._id;

  console.log(collectionsList)
  console.log(collection)
  console.log(drinkList)


  return (
    <section className={`${styles.collectionPage} ${pageStyles.card}`}>
      {drinkList.length > 0 ? (
        drinkList.map((drink) => (
          <DrinkDisplay
            collectionId={collectionId}
            drink={drink}
          />
        ))
      ) : (
        <Link to="/new_drink" className={styles.link_first_drink}>
          <p>let's start with the first drink?</p>
        </Link>
      )}
    </section>
  );
}
