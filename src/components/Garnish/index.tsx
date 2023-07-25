import pageStyles from '../../pages/DrinkSetupPage.module.css';

import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

interface GarnishProps {
    garnish: string,
    setGarnish: (garnish: string) => void
}

export default function Garnish({ garnish, setGarnish }: GarnishProps) {
    const [garnishInput, setGarnishInput] = useState('');

    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setGarnish(garnishInput);
        setGarnishInput('')
    }

    return (
        <>
            <h3>Garnish</h3>
            {garnish ? <p>{garnish}</p> : ''}
            <span className={pageStyles.input_button_align}>
                <Input 
                    id='garnish' 
                    labelText='Digite a decoração' 
                    value={garnishInput} 
                    aoDigitado={valor => setGarnishInput(valor)} 
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </>
    )
};