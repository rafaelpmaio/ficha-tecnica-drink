import styles from './CostDisplay.module.css'
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
        <div className={styles.cost_div}>
            <p className={styles.cost_results}>
                <span>Custo de Produção: <b className={styles.highlight}> R${totalCostValue}</b></span>
                <span>Preço de Venda: <b className={styles.highlight}>R${sellPrice} </b></span>
                <span>% de custo: <b className={styles.highlight}>{costPercentage}%</b></span>
            </p>
            <span className={pageStyles.input_button_align}>
                <Input
                    type='number'
                    id='preco-venda'
                    labelText='Preço de venda'
                    value={precoVendaInput}
                    onChange={valor => setPrecoVendaInput(valor)}
                    className={styles.sell_cost_input}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </div>
    )
};