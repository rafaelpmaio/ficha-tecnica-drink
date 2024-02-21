import { IDrink } from "./IDrink";

export interface ICollection {
    id: number,
    name: string,
    image: string,
    description?: string,
    drinksList: IDrink[]
}