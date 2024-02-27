import { IIngredient } from "./IIngredient";
import { IStep } from "./IStep";

export interface IDrink {
    id: number,
    name: string,
    image: string,
    ingredients: IIngredient[],
    steps: IStep[],
    garnish: string,
    glassware: string,
    confectionCost: number,
    sellPrice: number,
    costPercentage: number

}