import styles from './DrinkDatasheetIngredients.module.css';
import pageStyles from 'pages/DrinkPage/DrinkPage.module.css';
import { IDrink } from 'shared/interfaces/IDrink';

interface DrinkDatasheetIngredientsProps {
    drink: IDrink
}

export default function DrinkDatasheetIngredients({ drink }: DrinkDatasheetIngredientsProps) {
    return (
        <div>
            <h3>INGREDIENTS</h3>
            <span className={`${pageStyles.highlight} ${styles.ingredients_row}`}>
                <b className={styles.amount_column}>Amt</b>
                <b className={styles.measure_unit_column}>Un</b>
                <b className={styles.ingredient_column}>Ingredient</b>
                <b className={styles.cost_column}>Cost</b>
            </span>
            <ul className={styles.list}>
                {drink?.ingredients.map(ingredient =>
                    <li className={styles.ingredients_row}>
                        <b className={styles.amount_column}>{ingredient.quantidade}</b>
                        <b className={styles.measure_unit_column}>{ingredient.medida}</b>
                        <b className={styles.ingredient_column}>{ingredient.ingrediente}</b>
                        <b className={styles.cost_column}>{ingredient.custo}</b>
                    </li>
                )}
            </ul>
        </div>
    )
}