import styles from "./Home.module.css";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.css";
import SwiperDrinksCollection from "pages/Home/SwiperDrinksCollection";
import { useContext, useEffect } from "react";
import { CollectionsContext } from "context/CollectionContext";
import { httpCollections } from "httpApi";

export default function CollectionsCard() {
  const { collectionsList, setCollectionsList } =
    useContext(CollectionsContext);

  useEffect(() => {
    httpCollections
      .get("collections")
      .then((res) => JSON.parse(res.request.response))
      .then((collections) => setCollectionsList(collections));
  }, []);

  return (
    <section className={`${pageStyles.card} ${styles.collections_card}`}>
      <SwiperDrinksCollection collectionsList={collectionsList} />
    </section>
  );
}
