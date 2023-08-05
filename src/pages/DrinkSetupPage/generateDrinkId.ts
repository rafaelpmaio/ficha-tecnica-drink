import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";

export function generateDrinkId(selectedCollection: IDrinksCollection) {
    let newId: number;
        const drinkList = selectedCollection?.IDrinksList;
        return drinkList ? newId = drinkList[drinkList?.length].id + 1 : ''
}