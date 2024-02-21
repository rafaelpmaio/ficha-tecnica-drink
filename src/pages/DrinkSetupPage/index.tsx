import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DrinkSetupHeader from "pages/DrinkSetupPage/DrinkSetupHeader";
import IngredientsCard from "pages/DrinkSetupPage/IngredientsCard";
import PreparationCard from "./PreparationCard";
import ButtonSubmit from "components/ButtonSubmit";
import DrinkPhoto from "pages/DrinkSetupPage/DrinkPhoto";
import styles from "./DrinkSetupPage.module.css";
import { DrinkCreationContext } from "context/DrinkCreationContext";
import { DynamicHeaderContext } from "context/DisplayedHeaderContext";
import drinkBuilder from "shared/builders/drinkBuilder";
import removeSpecialCharsFromString from "shared/utils/removeSpecialCharsFromString";
import headerBuilder from "shared/builders/headerBuilder";
import validate from "errors";

export default function DrinkSetupPage() {
  const navigate = useNavigate();
  const {
    id,
    name,
    image,
    ingredients,
    steps,
    garnish,
    glassware,
    confectionCost,
    sellPrice,
    costPercentage,
  } = useContext(DrinkCreationContext);
  const { setHeaderInfos, selectedCollection, datalistSelectedId } = useContext(
    DynamicHeaderContext
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let collectionNameWithoutSpecialChars = removeSpecialCharsFromString(
      selectedCollection.name
    );
    const drink = drinkBuilder(
      id,
      name,
      image,
      ingredients,
      steps,
      garnish,
      glassware,
      confectionCost,
      sellPrice,
      costPercentage
    );
    const header = headerBuilder(
      selectedCollection.image,
      selectedCollection.name,
      selectedCollection.description
    );

    validate(ingredients, steps);
    selectedCollection.drinksList.push(drink);
    setHeaderInfos(header);
    navigate(
      `/collection/${datalistSelectedId}#${collectionNameWithoutSpecialChars}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <DrinkSetupHeader />
      <main>
        <IngredientsCard />
        <div className={styles.preparation_and_drink_photo_block}>
          <PreparationCard />
          <DrinkPhoto />
        </div>
      </main>
      <ButtonSubmit
        buttonValue="Salvar Drink"
        className={styles.submit_button}
      />
    </form>
  );
}
