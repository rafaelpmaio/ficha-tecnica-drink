import { IDrink } from "shared/interfaces/IDrink";
import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";

export default function addDrinkToList(newDrink: IDrink, collectionsList: IDrinksCollection[], selectedListId: number) {
    const selectedCollection = collectionsList.find(collection => collection.id === selectedListId);
    const drinkList = selectedCollection?.IDrinksList;
    console.log(newDrink);
    drinkList?.push(newDrink);
}