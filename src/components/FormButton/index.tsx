import styles from './FormButton.module.css'
import React from 'react';

export default function FormButton() {
    return (
        <button type='submit' className={styles.form_btn}>
            Salvar Drink
        </button>
    )
};