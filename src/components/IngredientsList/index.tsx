import './IngredientsList.css';
import { IIngredient } from "../../shared/interfaces/IIngredient";
import IngredientsListItem from '../IngredientsListItem/IngredientsListItem';

interface IngredientesListProps {
    listaIngredientes?: IIngredient[]
}

export default function IngredientsList({ listaIngredientes }: IngredientesListProps) {

    return (
        <>
            <h3 className="ingredients-list">
                <b className="coluna-quantidade">quantidade</b>
                <b className="coluna-medida">Medida</b>
                <b className="coluna-ingrediente">Ingredientes</b>
                <b className="coluna-custo">Custo (R$)</b>
            </h3>
            <ul>
                { listaIngredientes && listaIngredientes.map((ingrediente) => 
                    <IngredientsListItem ingredient={ingrediente} />)
                }
            </ul>
        </>
    )
}