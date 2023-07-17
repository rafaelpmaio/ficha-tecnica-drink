import { IIngredient } from '../../shared/interfaces/IIngredient';
import './DeleteButton.css';
import React from 'react';

function removeItem(key: number, list: IIngredient[] | string[]) {
    // const updateList = list.filter((item: IIngredient | string => item.key != key))
}

export default function DeleteButton() {
    return (
        <input className='delete-button' value='x' onClick={() => {}}/>
    )
};