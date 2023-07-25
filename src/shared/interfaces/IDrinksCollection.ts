import { IDrink } from "./IDrink";

export interface IDrinksCollection {
    id: number,
    collectionName: string,
    collectionImage: string,
    IDrinksList: IDrink[]
}