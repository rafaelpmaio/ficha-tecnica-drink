import styles from "./DrinkDisplay.module.css";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { IDrink } from "shared/interfaces/IDrink";
import { handleImageFormat } from "shared/utils/handleImageFormat";
import removeSpecialCharsFromString from "shared/utils/removeSpecialCharsFromString";

interface DrinkDisplayProps {
  collectionId: number;
  drink: IDrink;
}

export default function DrinkDisplay({
  collectionId,
  drink,
}: DrinkDisplayProps) {

  const cardDisplayRef = React.useRef(null);
  
  const { name, id, image } = drink;

  let drinkNameWithoutSpecialChars = removeSpecialCharsFromString(name);

  return (
    <Link to={`/drink/${collectionId}/${id}#${drinkNameWithoutSpecialChars}`}>
      <div
        className={`${pageStyles.card} ${styles.drinkDisplay}`}
        ref={cardDisplayRef}
      >
        <img
          className={styles.drink_image}
          src={handleImageFormat(image, "drinks")}
          alt={`drink ${name}`}
        />
        <h2 className={styles.drink_name}>{name}</h2>
      </div>
    </Link>
  );
}
