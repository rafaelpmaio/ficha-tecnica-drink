import Input from "components/Input"

interface DataListProps<T extends { id: number, name: string }> {
    arr: T[],
    value: string,
    onChange: (value: string) => void
}

export default function DataList<T extends { id: number, name: string }>(
    { arr, value, onChange }: DataListProps<T>) {

    return (
        <>
            <Input
                list="collections-list"
                id="collections"
                labelText="Collections"
                value={value}
                onChange={onChange}
            />
            <datalist id="collections-list">
                    {arr.map(item => <option
                        key={item.id}
                        value={`${item.id}. ${item.name}`}
                    />)}
            </datalist>
        </>
    )
};