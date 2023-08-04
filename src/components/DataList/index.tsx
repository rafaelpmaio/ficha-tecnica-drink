import Input from "components/Input"

interface DataListProps<T extends { id: number, name: string }> {
    arr: T[],
    value: string,
    setValue: (value: string) => void,
    copyId: (id: number) => void
}

export default function DataList<T extends { id: number, name: string }>(
    { arr, value, copyId, setValue }: DataListProps<T>) {

    return (
        <>
            <Input
                list="collections-list"
                id="collections"
                labelText="Collections"
                value={value}
                onChange={valor => setValue(valor)}
            />
            <datalist id="collections-list">
                {arr.map(item => <option
                    key={item.id}
                    value={item.name}
                    onClick={() => copyId(1)}
                />)}
            </datalist>
        </>
    )
};