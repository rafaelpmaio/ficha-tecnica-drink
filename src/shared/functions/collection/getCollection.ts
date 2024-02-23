import { ICollection } from "shared/interfaces/Collection";

export default function getCollection (id: number, list: ICollection[])  {
    return list.find(
      (collection) => id === collection.id
    );
  };
