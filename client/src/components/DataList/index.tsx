import Input from "components/Input"

interface DataListProps<T extends { id: number, name: string }> {
    arr: T[],
    value: string,
    onChange: (value: string) => void,
    className?: string;
}

export default function DataList<T extends { id: number, name: string }>(
    { arr, value, onChange, className }: DataListProps<T>) {

    return (
        <>
            <Input
                list="collections-list"
                id="collections"
                labelText="Collections"
                value={value}
                onChange={onChange}
                required
                className={className}
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