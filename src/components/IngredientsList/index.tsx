import styles from '../IngredientsCard/IngredientsCard.module.css';

import { IIngredient } from "../../shared/interfaces/IIngredient";
import IngredientsListItem from '../IngredientsListItem';

interface IngredientesListProps {
    listaIngredientes?: IIngredient[]
}

export default function IngredientsList({ listaIngredientes }: IngredientesListProps) {

    return (
        <>
            <h3 id='titulo-colunas' className={styles.ingredients_list}>
                <b className={styles.coluna_quantidade}>quantidade</b>
                <b className={styles.coluna_medida}>Medida</b>
                <b className={styles.coluna_ingrediente}>Ingredientes</b>
                <b className={styles.coluna_custo}>Custo (R$)</b>
            </h3>
            <ul>
                { listaIngredientes && listaIngredientes.map((ingrediente) => 
                    <IngredientsListItem ingredient={ingrediente} />)
                }
            </ul>
        </>
    )
}