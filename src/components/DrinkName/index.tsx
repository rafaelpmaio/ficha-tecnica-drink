import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

interface DrinkNameProps {
    drinkName: string[],
    setDrinkName: (array: string[]) => void
}

export default function DrinkName({ drinkName, setDrinkName }: DrinkNameProps) {

    const [nameInput, setNameInput] = useState('');

    return (
        <div>
            {drinkName.map(name => <h1>{name}</h1>)}
            <span className='input-button-align'>
                <Input id='drink-name' labelText='Digite o nome do drink' value={nameInput} aoDigitado={valor => setNameInput(valor as string)} />
                <Button value='+' aoClickado={() => {setDrinkName([nameInput]); setNameInput('')}} />
            </span>
        </div>
    )
};