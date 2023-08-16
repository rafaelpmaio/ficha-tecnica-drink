import styles from './Input.module.css';
import './Input.module.css';
import React from 'react';
import setLabelDecorationWhenInputHasValue from './setLabelDecorationWhenInputHasValue';

interface InputProps {
    onChange: (value: string) => void
    id: string,
    labelText: string,
    value: string,
    className?: string,
    type?: string,
    list?: string,
    required?: boolean,
    step?: string
}

export default function Input({ id, labelText, className, value, onChange: aoDigitado, list, required, step, type = 'text' }: InputProps) {

    const aoAlterado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoDigitado(evento.target.value);
    }
    let labelClass = setLabelDecorationWhenInputHasValue(value);

    return (
        <b className={`${styles.label_relative} ${className}`}>
            <input type={type} id={id} value={value} onChange={aoAlterado} list={list} required={required} step={step}/>
            <label className={labelClass} htmlFor={id}> {labelText} </label>
        </b>
    )
};