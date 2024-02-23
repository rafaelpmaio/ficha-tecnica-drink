import { ICollection } from "shared/interfaces/Collection";
import { IDrink } from "shared/interfaces/IDrink";

interface data {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function collectionBuilder(
  { id, name, image, description }: data,
  drinksList: IDrink[]
) {
  const collection: ICollection = {
    id,
    name,
    image,
    description,
    drinksList: drinksList,
  };

  return collection;
}
