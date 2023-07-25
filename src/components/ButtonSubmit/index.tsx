import styles from './ButtonSubmit.module.css'
import React from 'react';

interface FormButtonProps {
    buttonValue: string
}

export default function FormButton( {buttonValue }: FormButtonProps) {
    return (
        <button type='submit' className={styles.form_btn}>
            {buttonValue}
        </button>
    )
};