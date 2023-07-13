import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

export default function Garnish() {

    const [garnish, setGarnish] = useState('');
    const [garnishDisplayed, setGarnishDisplayed] = useState<string[]>([])

    return (
        <>
            <h3>Garnish</h3>
            {garnishDisplayed.map(garnish => <p>{garnish}</p>)}
            <span className='input-button-align'>
                <Input id='garnish' labelText='Digite a decoração' value={garnish} aoDigitado={valor => setGarnish(valor)} />
                <Button value='+' aoClickado={() => { setGarnishDisplayed([garnish]); setGarnish('') }} />
            </span>
        </>
    )
};