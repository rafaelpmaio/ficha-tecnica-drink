import Input from "components/Input";

interface DataListProps<T extends { id: number; name: string }> {
  arr: T[];
  value: string,
  onChange: (value: string) => void,
  className?: string,
  datalistId?:string,
  inputId?: string,
  label?: string,
}

export default function DataList<T extends { id: number; name: string }>({
  arr,
  value,
  onChange,
  className,
  datalistId = 'list',
  inputId = 'datalist',
  label = ''
}: DataListProps<T>) {
  return (
    <>
      <Input
        datalist={datalistId}
        id={inputId}
        labelText={label}
        value={value}
        onChange={onChange}
        required
        className={className}
      />
      <datalist id={datalistId}>
        {arr.map((item) => (
          <option key={item.id} value={`${item.id}. ${item.name}`} />
        ))}
      </datalist>
    </>
  );
}
