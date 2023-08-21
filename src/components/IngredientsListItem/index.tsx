import { useContext } from "react";
import { IIngredient } from "../../shared/interfaces/IIngredient";
import DeleteButton from "../ButtonDelete";
import styles from '../IngredientsCard/IngredientsCard.module.css';
import { DrinkCreationContext } from "context/DrinkCreationContext";

interface IngredientListItemProps {
    ingredient: IIngredient,
};

export default function IngredientListItem({ ingredient }: IngredientListItemProps) {
    const { setIngredientsList, ingredientsList = [] } = useContext(DrinkCreationContext);
    return (
        <>
            <li key={ingredient.id} className={styles.ingredients_list}>
                <b className={styles.coluna_quantidade}>{ingredient.quantidade.toFixed(2)}</b>
                <b className={styles.coluna_medida}>{ingredient.medida}</b>
                <b className={styles.coluna_ingrediente}>{ingredient.ingrediente}</b>
                <b className={styles.coluna_custo}>{ingredient.custo.toFixed(2)}</b>
                <DeleteButton
                    itemId={ingredient.id}
                    list={ingredientsList}
                    setList={setIngredientsList}
                />
            </li>
        </>
    )
};