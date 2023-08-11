import styles from '../IngredientsCard/IngredientsCard.module.css';
import IngredientsListItem from '../IngredientsListItem';
import { useContext } from 'react';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function IngredientsList() {
    const { ingredientsList } = useContext(DrinkCreationContext);

    return (
        <>
            <h2>Ingredientes</h2>
            <h3 id='titulo-colunas' className={styles.ingredients_list}>
                <b className={styles.coluna_quantidade}>qtd</b>
                <b className={styles.coluna_medida}>un</b>
                <b className={styles.coluna_ingrediente}>Ingrediente</b>
                <b className={styles.coluna_custo}>custo (R$)</b>
            </h3>
            <ul>
                {ingredientsList.map((ingrediente) =>
                    <IngredientsListItem
                        key={ingrediente.id}
                        ingredient={ingrediente}
                    />)}
            </ul>
        </>
    )
}