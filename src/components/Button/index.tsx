import './Button.css'
import React from 'react';

interface ButtonProps {
    value: string,
    aoClickado: (valor: any) => void
}

export default function Button({ value, aoClickado }: ButtonProps) {
    return (
        <button onClick={aoClickado}>
            {value}
        </button>
    )
};