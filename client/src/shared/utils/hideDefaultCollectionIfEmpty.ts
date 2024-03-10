import { ICollection } from "shared/interfaces/Collection";

export default function hideDefaultCollectionIfEmpty(collectionsList: ICollection[]) {
    if (!collectionsList[0].drinksList.length) {
        return collectionsList.filter(collection => collection.id !== 0)
    }
}