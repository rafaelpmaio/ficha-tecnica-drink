import styles from './DrinkName.module.css' 
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import React, { useContext, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function DrinkName() {
    const { drinkName, setDrinkName } = useContext(DrinkCreationContext);
    const [nameInput, setNameInput] = useState('');

    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setDrinkName(nameInput)
        setNameInput('')
    }

    return (
        <div className={styles.drink_name_div}>
            <h1 className={styles.drink_name_title}>{drinkName}</h1>
            <span className={pageStyles.input_button_align}>
                <Input
                    id='drink-name'
                    labelText='Digite o nome do drink'
                    value={nameInput}
                    onChange={valor => setNameInput(valor)}
                    className={styles.drink_name_input}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </div>
    )
};
