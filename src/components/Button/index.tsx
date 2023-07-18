import styles from './Button.module.css'

import React from 'react';
import { useCallback } from 'react';



interface ButtonProps {
    value: string,
    aoClickado: (valor: any) => void
}

export default function Button({ value, aoClickado }: ButtonProps) {

    return (
        <button className={styles.button} onClick={ aoClickado}>
            { value }
        </button >
    )
};