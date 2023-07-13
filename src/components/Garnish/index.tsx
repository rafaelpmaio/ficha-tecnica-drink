import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

interface GarnishProps {
    garnish: string[],
    setGarnish: (array: string[]) => void
}

export default function Garnish({ garnish, setGarnish}: GarnishProps) {

    const [garnishInput, setGarnishInput] = useState('');

    return (
        <>
            <h3>Garnish</h3>
            {garnish.map(garnish => <p>{garnish}</p>)}
            <span className='input-button-align'>
                <Input id='garnish' labelText='Digite a decoração' value={garnishInput} aoDigitado={valor => setGarnishInput(valor as string)} />
                <Button value='+' aoClickado={() => { setGarnish([garnishInput]); setGarnishInput('') }} />
            </span>
        </>
    )
};