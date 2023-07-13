import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

export default function DrinkName() {

    const [name, setName] = useState('');
    const [nameDisplayed, setNameDisplayed] = useState<string[]>(['White Cleriquot']);

    return (
        <div className='list'>
            {nameDisplayed.map(name => <h1>{name}</h1>)}
            <Input id='drink-name' labelText='Digite o nome do drink' value={name} aoDigitado={valor => setName(valor)} />
            <Button value='+' aoClickado={() => { setNameDisplayed([name]); setName('') }} />
        </div>
    )
};