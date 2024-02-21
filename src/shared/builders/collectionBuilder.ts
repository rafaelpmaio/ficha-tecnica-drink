import { IDrink } from "shared/interfaces/IDrink";
import { ICollection } from "shared/interfaces/Collection";

export default function collectionBuilder(
  id: number,
  name: string,
  image: string,
  description: string,
  drinksList?: IDrink[]
) {
  const collection: ICollection = {
    id,
    name,
    image,
    description,
    drinksList: drinksList || [],
  };

  return collection;
}
