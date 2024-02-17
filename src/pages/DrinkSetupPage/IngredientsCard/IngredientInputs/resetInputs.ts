export default function resetInputs(
    setQuantidade: React.Dispatch<React.SetStateAction<string>>,
    setMedida: React.Dispatch<React.SetStateAction<string>>,
    setIngrediente: React.Dispatch<React.SetStateAction<string>>,
    setCusto: React.Dispatch<React.SetStateAction<string>>
) {
    setQuantidade('');
    setMedida('');
    setIngrediente('');
    setCusto('');
}
