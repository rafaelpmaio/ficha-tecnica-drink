import { IIngredient } from "./IIngredient";

export interface IDrink {
    name: string,
    ingredients: IIngredient[],
    steps: string[],
    garnish: string,
    glassware: string,
    confectionCost: number,
    sellPrice: number,
    costPercentage: number

}