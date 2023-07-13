import React from "react";
import { IIngredient } from "../../shared/interfaces/IIngredient";

interface IngredientListItemProps {
    ingredient: IIngredient
};

export default function IngredientListItem({ ingredient }: IngredientListItemProps) {
    return (
        <li className="ingredients-list">
            <b className="coluna-quantidade">{ingredient.quantidade}</b>
            <b className="coluna-medida">{ingredient.medida}</b>
            <b className="coluna-ingrediente">{ingredient.ingrediente}</b>
            <b className="coluna-custo">{ingredient.custo}</b>
        </li>
    )
};