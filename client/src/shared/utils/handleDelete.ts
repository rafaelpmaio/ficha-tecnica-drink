export default function handleDelete<T extends { id: number }>(
    id: number,
    list: T[],
    setList: (arr: T[]) => void
) {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
}