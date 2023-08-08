import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import React, { useContext, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function Glassware() {
    const { glassware, setGlassware } = useContext(DrinkCreationContext);
    const [glasswareInput, setGlasswareInput] = useState('');
    
    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setGlassware(glasswareInput);
        setGlasswareInput('')
    }

    return (
        <>
            <h3>Glassware</h3>
            {glassware ? <p>{glassware}</p> : ''}
            <span className={pageStyles.input_button_align}>
                <Input
                    id='glassware'
                    labelText='Digite o recipiente utilizado'
                    value={glasswareInput}
                    onChange={valor => setGlasswareInput(valor)}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </>
    )
};