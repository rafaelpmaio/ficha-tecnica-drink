import styles from 'pages/DrinkSetupPage/PreparationCard/Preparation.module.css'
import { useContext, useEffect, useState } from 'react';
import Input from 'components/Input';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function Garnish() {
    const { garnish, setGarnish } = useContext(DrinkCreationContext)
    const [garnishInput, setGarnishInput] = useState('');

    useEffect(() => setGarnish(garnishInput))

    return (
        <>
            <h3>Garnish: <b className={styles.garnish_glassware_typed}>{garnish}</b></h3>
            <Input
                id='garnish'
                labelText='Wich garnish will be used?'
                value={garnishInput}
                onChange={valor => setGarnishInput(valor)}
                required
                className={styles.input}
            />
        </>
    )
};