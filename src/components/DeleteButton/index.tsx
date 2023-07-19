import styles from './DeleteButton.module.css';

import React from 'react';
import { IIngredient } from '../../shared/interfaces/IIngredient';
import { IStep } from '../../shared/interfaces/IStep';
import handleDeleteItem from './handleDeleteItem';

interface removeItemProps<T> {
    itemId: number,
    list: T[],
    setList: (array: T[]) => void
}


export default function DeleteButton <T extends { id: number }>({ itemId, list, setList }: removeItemProps<T>) {

    return (
        <input className={styles.delete_btn} value='x' onClick={() => handleDeleteItem(itemId, list, setList)} />
    )
};