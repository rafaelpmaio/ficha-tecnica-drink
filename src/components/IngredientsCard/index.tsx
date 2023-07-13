import React, { useState } from "react";
import IngredientsList from "../IngredientsList";
import { IIngredient } from "../../shared/interfaces/IIngredient";
import IngredientInputs from "../IngredientInputs";

interface IngredientsCardProps {
    listaIngredientes?: IIngredient[],
    setListaIngredientes: (array: IIngredient[]) => void
}

export default function IngredientsCard({ listaIngredientes = [], setListaIngredientes }: IngredientsCardProps) {
    
    return (
        <section className="card">
            <h2>Ingredientes</h2>
            <IngredientsList listaIngredientes={listaIngredientes} />
            <IngredientInputs listaIngredientes={listaIngredientes} setListaIngredientes={setListaIngredientes}/>
        </section>
    )
};