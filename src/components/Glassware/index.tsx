import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

export default function Glassware() {

    const [glassware, setGlassware] = useState('')
    const [glasswareDisplayed, setGlasswareDisplayed] = useState<string[]>([])

    return (
        <>
            <h3>Glassware</h3>
            {glasswareDisplayed.map(glassware => <p>{glassware}</p>)}
            <span className='input-button-align'>
                <Input id='glassware' labelText='Digite o recipiente utilizado' value={glassware} aoDigitado={valor => setGlassware(valor)} />
                <Button value='+' aoClickado={() => { setGlasswareDisplayed([glassware]); setGlassware('') }} />
            </span>
        </>
    )
};