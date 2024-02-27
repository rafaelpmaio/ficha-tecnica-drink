import styles from "./DrinkPage.module.css";
import pageStyles from "../DrinkSetupPage/DrinkSetupPage.module.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CollectionsContext } from "context/CollectionContext";
import { handleImageFormat } from "shared/utils/handleImageFormat";
import DrinkDatasheetHeader from "pages/DrinkPage/DrinkDatasheetHeader";
import DrinkDatasheetIngredients from "pages/DrinkPage/DrinkDatasheetIngredients";
import DrinkDatasheetPreparation from "pages/DrinkPage/DrinkDatasheetPreparation";
import getFromList from "shared/functions/collection/getFromList";
import { IDrink } from "shared/interfaces/IDrink";

export default function DrinkPage() {
  const { collectionsList } = useContext(CollectionsContext);

  const params = useParams();
  const collectionId = Number(params.collectionId);
  const drinkId = Number(params.drinkId);

  let collection = getFromList(collectionId, collectionsList);
  let drink: IDrink | undefined;

  if (collection) {
    drink = getFromList(drinkId, collection.drinksList);
  }
  
  if (!drink) {
      drink = collectionsList[0].drinksList[0];
  } 

  return (
    <main className={`${pageStyles.card} ${styles.drink_page} `}>
      <DrinkDatasheetHeader {...drink} />
      <section className={styles.drink_datasheet}>
        <DrinkDatasheetIngredients {...drink} />
        <DrinkDatasheetPreparation {...drink} />
      </section>
      <img
        src={handleImageFormat(drink.image, "drinks")}
        alt=""
        className={styles.drink_image}
      />
    </main>
  );
}
