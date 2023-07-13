import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

interface StepsListProps {
    lista?: string[]
}

export default function StepsList({ lista = [] }: StepsListProps) {

    const [passo, setPasso] = useState('');
    const [listaPassos, setListaPassos] = useState<string[]>(lista);

    return (
        <>
            <h3>Descreva o Passo a Passo</h3>
            <ul >
                {listaPassos.map(step => <li className='steps-list'>{step}</li>)}
            </ul>
            <Input id='step' labelText='Digite o próximo passo' value={passo} aoDigitado={valor => setPasso(valor)} />
            <Button value='+' aoClickado={() => { setListaPassos([...listaPassos, passo]); setPasso('') }} />
        </>
    )
};