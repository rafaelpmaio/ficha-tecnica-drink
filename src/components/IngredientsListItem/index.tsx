import React from "react";
import { IIngredient } from "../../shared/interfaces/IIngredient";
import DeleteButton from "../DeleteButton";
import styles from '../IngredientsCard/IngredientsCard.module.css';

interface IngredientListItemProps {
    ingredient: IIngredient,
    ingredientsList: IIngredient[],
    setIngredientsList: (array: IIngredient[]) => void
};

export default function IngredientListItem({ setIngredientsList, ingredient, ingredientsList = []}: IngredientListItemProps) {
    return (
        <>
            <li key={ingredient.id} className={styles.ingredients_list}>
                <b className={styles.coluna_quantidade}>{ingredient.quantidade}</b>
                <b className={styles.coluna_medida}>{ingredient.medida}</b>
                <b className={styles.coluna_ingrediente}>{ingredient.ingrediente}</b>
                <b className={styles.coluna_custo}>{ingredient.custo}</b>
                <DeleteButton 
                    itemId={ingredient.id} 
                    list={ingredientsList} 
                    setList={setIngredientsList}
                />
            </li>
        </>
    )
};