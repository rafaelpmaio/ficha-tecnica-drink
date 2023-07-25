import pageStyles from '../../pages/DrinkSetupPage.module.css'

import React, { useState } from "react";
import IngredientsList from "../IngredientsList";
import { IIngredient } from "../../shared/interfaces/IIngredient";
import IngredientInputs from "../IngredientInputs";


interface IngredientsCardProps {
    ingredientsList: IIngredient[],
    setIngredientsList: (array: IIngredient[]) => void
}

export default function IngredientsCard({ ingredientsList = [], setIngredientsList }: IngredientsCardProps) {
    
    return (
        <section className={pageStyles.card}>
            <h2>Ingredientes</h2>
            <IngredientsList ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
            <IngredientInputs ingredientsList={ingredientsList} setListaIngredientes={setIngredientsList}/>
        </section>
    )
};