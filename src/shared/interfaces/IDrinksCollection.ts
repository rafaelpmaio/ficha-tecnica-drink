import { IDrink } from "./IDrink";

export interface IDrinksCollection {
    id: number,
    name: string,
    image: string,
    description?: string,
    IDrinksList: IDrink[]
}