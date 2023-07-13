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
                <Input
                    id='glassware'
                    labelText='Digite o recipiente utilizado (Apenas uma linha permitida)'
                    value={glassware}
                    aoDigitado={valor => setGlassware(valor)}
                />
                <Button value='+' aoClickado={() => {setGlasswareDisplayed([glassware]); setGlassware('')}} />
            </>
            )
            };