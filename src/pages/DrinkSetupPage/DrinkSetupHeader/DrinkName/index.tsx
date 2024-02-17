import styles from './DrinkName.module.css'
import { useContext, useEffect, useState } from 'react';
import Input from '../../../../components/Input';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function DrinkName() {
    const { drinkName, setDrinkName } = useContext(DrinkCreationContext);
    const [nameInput, setNameInput] = useState('');

    useEffect(() => setDrinkName(nameInput))

    return (
        <div className={styles.drink_name_div}>
            <h1 className={styles.drink_name_title}>{drinkName}</h1>
            <Input
                id='drink-name'
                labelText='Drink Name'
                value={nameInput}
                onChange={valor => setNameInput(valor)}
                className={styles.drink_name_input}
                required
            />
        </div>
    )
};
