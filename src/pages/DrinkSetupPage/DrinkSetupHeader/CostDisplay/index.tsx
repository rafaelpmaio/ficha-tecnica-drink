import styles from './CostDisplay.module.css'
import { useContext, useEffect, useState } from 'react';
import Input from 'components/Input';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function CostDisplay() {
    const { totalCostValue, costPercentage, sellPrice, setSellPrice } = useContext(DrinkCreationContext);
    const [precoVendaInput, setPrecoVendaInput] = useState('');

    useEffect(() => setSellPrice(Number.parseFloat(precoVendaInput).toFixed(2)), [precoVendaInput])

    return (
        <div className={styles.cost_div}>
            <div className={styles.cost_results_table}>
                <p className={styles.cost_result_line}>Sell Price:  <b className={styles.highlight}>R${precoVendaInput ? sellPrice : 0} </b></p>
                <p className={styles.cost_result_line}>Production Cost:<b className={styles.highlight}> R${totalCostValue}</b></p>
                <p className={styles.cost_result_line}>Cost Percentage: <b className={styles.highlight}>{costPercentage}%</b></p>
            </div>
            <Input
                type='number'
                id='preco-venda'
                labelText='Sell Price'
                value={precoVendaInput}
                onChange={valor => setPrecoVendaInput(valor)}
                className={styles.input}
                required
            />
        </div>
    )
};