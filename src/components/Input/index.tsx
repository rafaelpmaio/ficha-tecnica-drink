import styles from './Input.module.css';
import './Input.module.css';
import React from 'react';


interface InputProps {
    aoDigitado: (value: string) => void
    id: string,
    value: string | number,
    labelText: string,
    className?: string,
    type?: string,
}

export default function Input({ id, labelText, className, value, aoDigitado, type = 'text' }: InputProps) {

    const aoAlterado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoDigitado(evento.target.value);
    }

    // const setLabelDecorationWhenInputHasValue = (value: string) => {
        let labelClass = '';
        value 
            ? labelClass = styles.input_has_value
            : labelClass = '';
    // }

    return (
        <b className={`${styles.label_relative} ${className}`}>
            <input type={type} id={id} value={value} onChange={aoAlterado} />
            <label className={labelClass} htmlFor={id}> {labelText} </label>
        </b>
    )
};