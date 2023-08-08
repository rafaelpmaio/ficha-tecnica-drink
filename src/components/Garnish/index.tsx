import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import React, { useContext, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function Garnish() {
    const { garnish, setGarnish } = useContext(DrinkCreationContext)
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
                    onChange={valor => setGarnishInput(valor)}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </>
    )
};