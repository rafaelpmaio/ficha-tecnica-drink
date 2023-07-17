import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import DeleteButton from '../DeleteButton';

interface StepsListProps {
    listaSteps: string[],
    setListaSteps: (array: string[]) => void
}

export default function StepsList({ listaSteps, setListaSteps }: StepsListProps) {

    const [passoInput, setPassoInput] = useState('');

    return (
        <>
            <h3>Descreva o Passo a Passo</h3>
            <ul>
                {listaSteps.map(step =>
                    <>
                        <li className='steps-list'>{step}
                            <DeleteButton />
                        </li>
                    </>
                )}
            </ul>
            <span className='input-button-align'>
                <Input id='step' labelText='Digite o próximo passo' value={passoInput} aoDigitado={valor => setPassoInput(valor as string)} />
                <Button value='+' aoClickado={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    event.preventDefault()
                    setListaSteps([...listaSteps, passoInput]);
                    setPassoInput('')
                }} />
            </span>
        </>
    )
};