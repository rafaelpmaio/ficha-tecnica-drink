import styles from '../IngredientsCard/IngredientsCard.module.css'
import React, { useContext, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { IIngredient } from '../../shared/interfaces/IIngredient';
import createIngredient from './createIngredient';
import resetInputs from './resetInputs';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function IngredientInputs() {
    const { ingredientsList, setIngredientsList } = useContext(DrinkCreationContext);
    const [id, setId] = useState(0);
    const [quantidade, setQuantidade] = useState('');
    const [medida, setMedida] = useState('');
    const [ingrediente, setIngrediente] = useState('');
    const [custo, setCusto] = useState('');

    let newIngredient = createIngredient(
        id,
        Number.parseFloat(quantidade),
        medida, ingrediente,
        Number.parseFloat(custo)
    );
    const addIngredientToList = (ingrediente: IIngredient) => {
        setIngredientsList([...ingredientsList, ingrediente]);
        setId(id + 1);
    }
    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        addIngredientToList(newIngredient);
        resetInputs(setQuantidade, setMedida, setIngrediente, setCusto);
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
                    onChange={valor => setQuantidade(valor)}
                />
                <Input
                    id='medida'
                    className={styles.coluna_medida}
                    labelText='Medida'
                    value={medida}
                    onChange={valor => setMedida(valor)}
                />
                <Input
                    id='ingredientes'
                    className={styles.coluna_ingrediente}
                    labelText='Ingrediente'
                    value={ingrediente}
                    onChange={valor => setIngrediente(valor)}
                />
                <Input
                    id='custo'
                    className={styles.coluna_custo}
                    labelText='Custo'
                    type='number'
                    value={custo}
                    onChange={valor => setCusto(valor)}
                />
            </div>
            <Button value='+' aoClickado={functionsExecutedOnClick} />
        </>
    )
};