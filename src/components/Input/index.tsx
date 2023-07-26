import styles from './Input.module.css';
import './Input.module.css';
import React from 'react';
import setLabelDecorationWhenInputHasValue from './setLabelDecorationWhenInputHasValue';

interface InputProps {
    aoDigitado: (value: string) => void
    id: string,
    value: string,
    labelText: string,
    className?: string,
    type?: string,
}

export default function Input({ id, labelText, className, value, aoDigitado, type = 'text' }: InputProps) {

    const aoAlterado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoDigitado(evento.target.value);
    }
    let labelClass = setLabelDecorationWhenInputHasValue(value);

    return (
        <b className={`${styles.label_relative} ${className}`}>
            <input type={type} id={id} value={value} onChange={aoAlterado} />
            <label className={labelClass} htmlFor={id}> {labelText} </label>
        </b>
    )
};