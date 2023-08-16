import styles from './CostDisplay.module.css'
import { useContext, useEffect, useState } from 'react';
import Input from '../Input';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function CostDisplay() {
    const { totalCostValue, costPercentage, sellPrice, setSellPrice } = useContext(DrinkCreationContext);
    const [precoVendaInput, setPrecoVendaInput] = useState('');

    useEffect(() => setSellPrice(precoVendaInput))

    return (
        <div className={styles.cost_div}>
            <p className={styles.cost_results}>
                <span>Custo de Produção: <b className={styles.highlight}> R${totalCostValue}</b></span>
                <span>Preço de Venda: <b className={styles.highlight}>R${sellPrice} </b></span>
                <span>% de custo: <b className={styles.highlight}>{costPercentage}%</b></span>
            </p>
            <Input
                type='number'
                id='preco-venda'
                labelText='Preço de venda'
                value={precoVendaInput}
                onChange={valor => setPrecoVendaInput(valor)}
                className={styles.sell_cost_input}
                required
            />
        </div>
    )
};