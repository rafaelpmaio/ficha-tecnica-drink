import styles from '../IngredientsCard/IngredientsCard.module.css';

import { IIngredient } from "../../shared/interfaces/IIngredient";
import IngredientsListItem from '../IngredientsListItem';

interface IngredientesListProps {
    ingredientsList: IIngredient[],
    setIngredientsList: (array: IIngredient[]) => void
}

export default function IngredientsList({ setIngredientsList, ingredientsList = [] }: IngredientesListProps) {

    return (
        <>
            <h3 id='titulo-colunas' className={styles.ingredients_list}>
                <b className={styles.coluna_quantidade}>quantidade</b>
                <b className={styles.coluna_medida}>Medida</b>
                <b className={styles.coluna_ingrediente}>Ingredientes</b>
                <b className={styles.coluna_custo}>Custo (R$)</b>
            </h3>
            <ul>
                {ingredientsList && ingredientsList.map((ingrediente) =>
                    <IngredientsListItem
                        key={ingrediente.id}
                        ingredient={ingrediente}
                        ingredientsList={ingredientsList}
                        setIngredientsList={setIngredientsList}
                    />)}
            </ul>
        </>
    )
}