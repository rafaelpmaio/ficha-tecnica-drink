import styles from './DeleteButton.module.css';

import { IIngredient } from '../../shared/interfaces/IIngredient';
import React from 'react';

function removeItem(key: number, list: IIngredient[] | string[]) {
    // const updateList = list.filter((item: IIngredient | string => item.key != key))
}

export default function DeleteButton() {
    return (
        <input className={styles.delete_btn} value='x' onClick={() => {}}/>
    )
};