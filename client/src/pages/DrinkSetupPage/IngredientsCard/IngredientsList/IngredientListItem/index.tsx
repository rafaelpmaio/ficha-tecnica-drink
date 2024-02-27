import { useContext } from "react";
import { IIngredient } from "shared/interfaces/IIngredient";
import DeleteButton from "components/ButtonDelete";
import styles from 'pages/DrinkSetupPage/IngredientsCard/IngredientsCard.module.css';
import { DrinkCreationContext } from "context/DrinkCreationContext";

export default function IngredientListItem(ingredient : IIngredient) {
    const { setIngredients, ingredients } = useContext(DrinkCreationContext);
    return (
        <>
            <li key={ingredient.id} className={styles.ingredients_list}>
                <b className={styles.coluna_quantidade}>{ingredient.amount.toFixed(2)}</b>
                <b className={styles.coluna_medida}>{ingredient.measureUnit}</b>
                <b className={styles.coluna_ingrediente}>{ingredient.ingredient}</b>
                <b className={styles.coluna_custo}>{ingredient.cost.toFixed(2)}</b>
                <DeleteButton
                    itemId={ingredient.id}
                    list={ingredients}
                    setList={setIngredients}
                />
            </li>
        </>
    )
};