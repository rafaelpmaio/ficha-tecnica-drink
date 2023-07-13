import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { IIngredient } from '../../shared/interfaces/IIngredient';

interface IngredientInputsProps {
    listaIngredientes: IIngredient[],
    setLista: (array: IIngredient[]) => void
}

export default function IngredientInputs({ listaIngredientes, setLista }: IngredientInputsProps) {

    const [quantidade, setQuantidade] = useState('');
    const [medida, setMedida] = useState('');
    const [ingrediente, setIngrediente] = useState('');
    const [custo, setCusto] = useState('');

    let novoIngrediente: IIngredient = {
        quantidade: Number.parseFloat(quantidade),
        medida: medida,
        ingrediente: ingrediente,
        custo: Number.parseFloat(custo)

    }

    const addIngredienteLista = (ingrediente: IIngredient) => {
        setLista([...listaIngredientes, ingrediente]);
        setQuantidade('');
        setMedida('');
        setIngrediente('');
        setCusto('');
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
                    aoDigitado={valor => setQuantidade(valor)}
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
                    aoDigitado={valor => setCusto(valor)}
                />
            </div>
            <Button value='+' aoClickado={() => addIngredienteLista(novoIngrediente)} />
        </>
    )
};