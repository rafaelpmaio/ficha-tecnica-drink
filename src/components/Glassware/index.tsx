import pageStyles from '../../pages/PaginaInicial.module.css';

import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

interface GlasswareProps {
    glassware: string[],
    setGlassware: (array: string[]) => void
}

export default function Glassware({ glassware, setGlassware}:GlasswareProps) {

    const [glasswareInput, setGlasswareInput] = useState('')

    return (
        <>
            <h3>Glassware</h3>
            {glassware.map(glassware => <p>{glassware}</p>)}
            <span className={pageStyles.input_button_align}>
                <Input id='glassware' labelText='Digite o recipiente utilizado' value={glasswareInput} aoDigitado={valor => setGlasswareInput(valor as string)} />
                <Button value='+' aoClickado={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
                    event.preventDefault()
                    setGlassware([glasswareInput]); 
                    setGlasswareInput('') }} />
            </span>
        </>
    )
};