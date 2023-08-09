import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import React, { useContext, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function CostDisplay() {
    const { totalCostValue, costPercentage, sellPrice, setSellPrice } = useContext(DrinkCreationContext);
    const [precoVendaInput, setPrecoVendaInput] = useState('');
    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setSellPrice(precoVendaInput);
        setPrecoVendaInput('')
    }

    return (
        <div>
            <p>Custo de Produção: {totalCostValue}</p>
            <p>Preço de Venda: R${sellPrice} </p>
            <p>% de custo: {costPercentage}</p>
            <span className={pageStyles.input_button_align}>
                <Input
                    type='number'
                    id='preco-venda'
                    labelText='Preço de venda'
                    value={precoVendaInput}
                    onChange={valor => setPrecoVendaInput(valor)}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </div>
    )
};