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
            <div className={styles.cost_results_table}>
                <p className={styles.cost_result_line}>Custo de Produção:<b className={styles.highlight}> R${totalCostValue}</b></p>
                <p className={styles.cost_result_line}>Preço de Venda: <b className={styles.highlight}>R${sellPrice} </b></p>
                <p className={styles.cost_result_line}>% de custo: <b className={styles.highlight}>{costPercentage}%</b></p>
            </div>
            <Input
                type='number'
                id='preco-venda'
                labelText='Preço de venda'
                value={precoVendaInput}
                onChange={valor => setPrecoVendaInput(valor)}
                className={styles.input}
                required
            />
        </div>
    )
};