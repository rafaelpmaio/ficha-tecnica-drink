import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DrinkSetupHeader from "pages/DrinkSetupPage/DrinkSetupHeader";
import IngredientsCard from "pages/DrinkSetupPage/IngredientsCard";
import PreparationCard from "./PreparationCard";
import DrinkPhoto from "pages/DrinkSetupPage/DrinkPhoto";
import styles from "./DrinkSetupPage.module.css";
import { DrinkCreationContext } from "context/DrinkCreationContext";
import { DynamicHeaderContext } from "context/DynamicHeaderContext";
import drinkBuilder from "shared/builders/drinkBuilder";
import removeSpecialCharsFromString from "shared/utils/removeSpecialCharsFromString";
import headerBuilder from "shared/builders/headerBuilder";
import validateDrink from "errors/validateDrink";
import { CollectionsContext } from "context/CollectionContext";
import Button from "components/Button";

export default function DrinkSetupPage() {
  const navigate = useNavigate();
  const drinkContext = useContext(DrinkCreationContext);
  const { setHeaderData } = useContext(DynamicHeaderContext);
  const { selectedCollection } = useContext(CollectionsContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let collectionNameWithoutSpecialChars = removeSpecialCharsFromString(
      selectedCollection.name
    );
    const drink = drinkBuilder(drinkContext);
    const header = headerBuilder(
      selectedCollection.image,
      selectedCollection.name,
      selectedCollection.description
    );

    validateDrink(drinkContext);
    selectedCollection.drinksList.push(drink);
    setHeaderData(header);
    navigate(
      `/collection/${selectedCollection.id}#${collectionNameWithoutSpecialChars}`
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
      <Button type="submit">Save</Button>
    </form>
  );
}
