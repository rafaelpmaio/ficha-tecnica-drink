import styles from 'pages/DrinkSetupPage/IngredientsCard/IngredientsCard.module.css';
import IngredientListItem from 'pages/DrinkSetupPage/IngredientsCard/IngredientsList/IngredientListItem';
import { useContext } from 'react';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function IngredientsList() {
    const { ingredients } = useContext(DrinkCreationContext);

    return (
        <>
            <h2>Ingredients</h2>
            <h3 id='titulo-colunas' className={styles.ingredients_list}>
                <b className={styles.coluna_quantidade}>Amt</b>
                <b className={styles.coluna_medida}>Un</b>
                <b className={styles.coluna_ingrediente}>Ingrediente</b>
                <b className={styles.coluna_custo}>Cost</b>
            </h3>
            <ul>
                {ingredients.map((ingredient) =>
                    <IngredientListItem
                        key={ingredient.id}
                        ingredient={ingredient}
                    />)}
            </ul>
        </>
    )
}