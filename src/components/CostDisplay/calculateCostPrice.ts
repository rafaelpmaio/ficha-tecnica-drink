import { IIngredient } from "../../shared/interfaces/IIngredient";

export default function calculateCostPrice(listaItens: IIngredient[]) {
    let custoTotal: number = 0;
    { listaItens.forEach(ingredient => custoTotal += ingredient.custo) }
    return custoTotal;
}