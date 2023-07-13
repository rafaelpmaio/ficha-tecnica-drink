import React from 'react';

import './Input.css';

interface InputProps {
    aoDigitado: (value: string | number) => void
    id: string,
    value: string | number,
    labelText: string,
    className?: string,
    type?: string,
}

export default function Input({ id, labelText, className, value, aoDigitado, type = 'text' } : InputProps) {

    const aoAlterado = (evento: React.ChangeEvent<HTMLInputElement>) => {
       aoDigitado(evento.target.value);
    }

    return (
        <b className= {`label-relative ${className}`}>
            <input key={1} type={type} id={id} value={value} onChange={aoAlterado}/>
            <label htmlFor={id}> {labelText} </label> 
        </b>
    )
};