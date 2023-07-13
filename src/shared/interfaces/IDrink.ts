import { IIngredient } from "./IIngredient";

export interface IDrink {
    name: string,
    ingredients: IIngredient[],
    garnish: string,
    glassware: string

}