import styles from '../IngredientsCard/IngredientsCard.module.css'

import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { IIngredient } from '../../shared/interfaces/IIngredient';
import createIngredient from './createIngredient';
import resetInputs from './resetInputs';

interface IngredientInputsProps {
    ingredientsList: IIngredient[],
    setListaIngredientes: (array: IIngredient[]) => void
}

export default function IngredientInputs({ ingredientsList, setListaIngredientes }: IngredientInputsProps) {

    const [id, setId] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [medida, setMedida] = useState('');
    const [ingrediente, setIngrediente] = useState('');
    const [custo, setCusto] = useState(0);

    let newIngredient = createIngredient(id, quantidade, medida, ingrediente, custo);
    const addIngredientToList = (ingrediente: IIngredient) => {
        setListaIngredientes([...ingredientsList, ingrediente]);
        setId(id + 1);
    }
    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        addIngredientToList(newIngredient);
        resetInputs(setQuantidade, setMedida, setIngrediente, setCusto);
        console.log(newIngredient)
    };

    return (
        <>
            <div className={styles.ingredients_list}>
                <Input
                    id='quantidade'
                    className={styles.coluna_quantidade}
                    labelText='Quantidade'
                    type='number'
                    value={quantidade}
                    aoDigitado={valor => setQuantidade(Number.parseFloat(valor))}
                />
                <Input
                    id='medida'
                    className={styles.coluna_medida}
                    labelText='Medida'
                    value={medida}
                    aoDigitado={valor => setMedida(valor)}
                />
                <Input
                    id='ingredientes'
                    className={styles.coluna_ingrediente}
                    labelText='Ingrediente'
                    value={ingrediente}
                    aoDigitado={valor => setIngrediente(valor)}
                />
                <Input
                    id='custo'
                    className={styles.coluna_custo}
                    labelText='Custo'
                    type='number'
                    value={custo}
                    aoDigitado={valor => setCusto(Number.parseFloat(valor))}
                />
            </div>
            <Button value='+' aoClickado={functionsExecutedOnClick} />
        </>
    )
};