interface Type {
  _id: string
}

export default function getFromList<T extends Type> (id: string = '', list: T[])  {
    return list.find(
      (item) => id === item._id
    );
  };
