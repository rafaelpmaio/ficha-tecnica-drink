import styles from 'pages/DrinkSetupPage/IngredientsCard/IngredientsCard.module.css'
import React, { useContext, useEffect, useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import { IIngredient } from 'shared/interfaces/IIngredient';
import createIngredient from './createIngredient';
import resetInputs from './resetInputs';
import { DrinkCreationContext } from 'context/DrinkCreationContext';
import calculateCostPrice from 'shared/utils/calculateCostPrice';
import calculateCostPercentage from 'shared/utils/calculateCostPercentage';

export default function IngredientInputs() {
    const { ingredientsList, sellPrice, setIngredientsList, totalCostValue, setTotalCostValue, setCostPercentage } = useContext(DrinkCreationContext);
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
    const addIngredientToList = (newIngredient: IIngredient) => {
        setIngredientsList([...ingredientsList, newIngredient]);
        setId(id + 1);
    }
    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if(!quantidade || !medida || !ingrediente || !custo) {alert("Something is missing in the ingredient!"); return}
        addIngredientToList(newIngredient);
        resetInputs(setQuantidade, setMedida, setIngrediente, setCusto);
    };

    useEffect(() => {
        setTotalCostValue(calculateCostPrice(ingredientsList));
        setCostPercentage(calculateCostPercentage(totalCostValue, Number.parseFloat(sellPrice)));
    }, [ingredientsList, sellPrice, totalCostValue])

    return (
        <>
            <div className={`${styles.ingredient_inputs_list} ${styles.ingredients_list}`}>
                <Input
                    id='quantidade'
                    className={`${styles.ingredient_input} ${styles.coluna_quantidade}`}
                    labelText='Amount'
                    type='number'
                    value={quantidade}
                    onChange={valor => setQuantidade(valor)
                    }
                />
                <Input
                    id='medida'
                    className={`${styles.ingredient_input} ${styles.coluna_medida}`}
                    labelText='Unit'
                    value={medida}
                    onChange={valor => setMedida(valor)}
                />
                <Input
                    id='ingredientes'
                    className={`${styles.ingredient_input} ${styles.coluna_ingrediente}`}
                    labelText='Ingredient'
                    value={ingrediente}
                    onChange={valor => setIngrediente(valor)}
                />
                <Input
                    id='custo'
                    className={`${styles.ingredient_input} ${styles.coluna_custo}`}
                    labelText='Cost'
                    type='number'
                    value={custo}
                    onChange={valor => setCusto(valor)}
                />
            </div>
            <Button value='+' aoClickado={functionsExecutedOnClick} />
        </>
    )
};