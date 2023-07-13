import React, { useState } from "react";
import IngredientsList from "../IngredientsList";
import { IIngredient } from "../../shared/interfaces/IIngredient";
import IngredientInputs from "../IngredientInputs";

interface IngredientsCardProps {
    listaItens?: IIngredient[]
}

export default function IngredientsCard({ listaItens = [] }: IngredientsCardProps) {
    
    const [lista, setLista] = useState(listaItens);
    
    return (
        <section className="card">
            <h2>Ingredientes</h2>
            <IngredientsList listaIngredientes={lista} />
            <IngredientInputs listaIngredientes={lista} setLista={setLista}/>
        </section>
    )
};