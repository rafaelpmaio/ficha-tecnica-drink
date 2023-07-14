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

    return (
        <>
            <div className="ingredients-list">
                <Input
                    id='quantidade'
                    className='coluna-quantidade'
                    labelText='Quantidade'
                    type='number'
                    value={quantidade}
                    aoDigitado={valor => setQuantidade(valor as number)}
                />
                <Input
                    id='medida'
                    className='coluna-medida'
                    labelText='Medida'
                    value={medida}
                    aoDigitado={valor => setMedida(valor as string)}
                />
                <Input
                    id='ingredientes'
                    className='coluna-ingrediente'
                    labelText='Ingrediente'
                    value={ingrediente}
                    aoDigitado={valor => setIngrediente(valor as string)}
                />
                <Input
                    id='custo'
                    className='coluna-custo'
                    labelText='Custo'
                    type='number'
                    value={custo}
                    aoDigitado={valor => setCusto(valor as number)}
                />
            </div>
            <Button value='+' aoClickado={() => addIngredienteLista(novoIngrediente)} />
        </>
    )
};