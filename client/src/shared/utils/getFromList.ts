interface Type {
  id: number
}

export default function getFromList<T extends Type> (id: number, list: T[])  {
    return list.find(
      (item) => id === item.id
    );
  };
