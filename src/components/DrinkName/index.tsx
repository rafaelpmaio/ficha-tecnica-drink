import pageStyles from '../../pages/PaginaInicial.module.css';

import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

interface DrinkNameProps {
    drinkName: string,
    setDrinkName: (name: string) => void
}

export default function DrinkName({ drinkName, setDrinkName }: DrinkNameProps) {
    const [nameInput, setNameInput] = useState('');

    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setDrinkName(nameInput);
        setNameInput('')
    }

    return (
        <div>
            {drinkName ? <h1>{drinkName}</h1> : ''}
            <span className={pageStyles.input_button_align}>
                <Input
                    id='drink-name'
                    labelText='Digite o nome do drink'
                    value={nameInput}
                    aoDigitado={valor => setNameInput(valor)}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick}/>
            </span>
        </div>
    )
};