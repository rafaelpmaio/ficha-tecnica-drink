import styles from './Input.module.css';

import React from 'react';


interface InputProps {
    aoDigitado: (value: string) => void
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
        <b className= {`${styles.label_relative} ${className}`}>
            <input key={1} type={type} id={id} value={value} onChange={aoAlterado}/>
            <label htmlFor={id}> {labelText} </label> 
        </b>
    )
};