export default function handleDeleteItem<T extends { id: number }>(
    itemId: number,
    list: T[],
    setList: (arr: T[]) => void
) {
    const updatedList = list.filter(item => item.id !== itemId);
    setList(updatedList);
}
