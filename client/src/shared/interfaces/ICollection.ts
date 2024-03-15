import { IDrink } from "./IDrink";

export interface ICollection {
    _id: string,
    name: string,
    image: string,
    description?: string,
    drinksList: IDrink[]
}