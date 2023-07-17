import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { IIngredient } from '../../shared/interfaces/IIngredient';

interface IngredientInputsProps {
    listaIngredientes: IIngredient[],
    setListaIngredientes: (array: IIngredient[]) => void
}

export default function IngredientInputs({ listaIngredientes, setListaIngredientes }: IngredientInputsProps) {

    const [quantidade, setQuantidade] = useState(0);
    const [medida, setMedida] = useState('');
    const [ingrediente, setIngrediente] = useState('');
    const [custo, setCusto] = useState(0);

    let novoIngrediente: IIngredient = {
        id: 1,
        quantidade: quantidade,
        medida: medida,
        ingrediente: ingrediente,
        custo: custo
    }

    const addIngredienteLista = (ingrediente: IIngredient) => {
        setListaIngredientes([...listaIngredientes, ingrediente]);
        setQuantidade(0);
        setMedida('');
        setIngrediente('');
        setCusto(0);
    }


    const aoClickar = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        addIngredienteLista(novoIngrediente);
        // incrementKey();
    }

    return (
        <>
            <div className="ingredients-list">
                <Input
                    id='quantidade'
                    className='coluna-quantidade'
                    labelText='Quantidade'
                    type='number'
                    value={quantidade}
                    aoDigitado={valor => setQuantidade(Number.parseFloat(valor))}
                />
                <Input
                    id='medida'
                    className='coluna-medida'
                    labelText='Medida'
                    value={medida}
                    aoDigitado={valor => setMedida(valor)}
                />
                <Input
                    id='ingredientes'
                    className='coluna-ingrediente'
                    labelText='Ingrediente'
                    value={ingrediente}
                    aoDigitado={valor => setIngrediente(valor)}
                />
                <Input
                    id='custo'
                    className='coluna-custo'
                    labelText='Custo'
                    type='number'
                    value={custo}
                    aoDigitado={valor => setCusto(Number.parseFloat(valor))}
                />
            </div>
            <Button value='+' aoClickado={aoClickar} />
        </>
    )
};