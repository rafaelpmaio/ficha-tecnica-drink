import styles from './ButtonDelete.module.css';
import React from 'react';
import handleDeleteItem from './handleDeleteItem';

interface removeItemProps<T> {
    itemId: number,
    list: T[],
    setList: (array: T[]) => void
}

export default function DeleteButton <T extends { id: number }>({ itemId, list, setList }: removeItemProps<T>) {
    return (
        <input 
            className={styles.delete_btn} 
            defaultValue='x' 
            onClick={() => handleDeleteItem(itemId, list, setList)} />
    )
};