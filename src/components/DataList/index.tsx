import Input from "components/Input"
import { text } from "stream/consumers";

interface DataListProps<T extends { id: number, name: string }> {
    arr: T[],
    value: string,
    setValue: (value: string) => void,
    copyId: (id: number) => void
}

export default function DataList<T extends { id: number, name: string }>(
    { arr, value, copyId, setValue }: DataListProps<T>) {

    const handleOnChange = (value: string) => {
        setValue(value);
        let itemId = value.substring(0, value.indexOf('.'));
        copyId(Number.parseInt(itemId));
    }

    return (
        <>
            <Input
                list="collections-list"
                id="collections"
                labelText="Collections"
                value={value}
                onChange={handleOnChange}
            />
            <datalist id="collections-list" onClick={() => copyId(3)}>
                {arr.map(item => <option
                    key={item.id}
                    value={`${item.id}. ${item.name}`}
                />)}
            </datalist>
        </>
    )
};