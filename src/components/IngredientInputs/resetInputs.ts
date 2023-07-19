export default function resetInputs(
    setQuantidade: React.Dispatch<React.SetStateAction<number>>,
    setMedida: React.Dispatch<React.SetStateAction<string>>,
    setIngrediente: React.Dispatch<React.SetStateAction<string>>,
    setCusto: React.Dispatch<React.SetStateAction<number>>
) {
    setQuantidade(0);
    setMedida('');
    setIngrediente('');
    setCusto(0);
}
