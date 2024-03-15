import { ICollection } from "shared/interfaces/ICollection";
import { IDrink } from "shared/interfaces/IDrink";

interface data {
  _id: string;
  name: string;
  image: string;
  description: string;
}

export default function collectionBuilder(
  { _id, name, image, description }: data,
  drinksList: IDrink[]
) {
  const collection: ICollection = {
    _id,
    name,
    image,
    description,
    drinksList: drinksList,
  };

  return collection;
}
