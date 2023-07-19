import React from 'react';
import { IIngredient } from '../../shared/interfaces/IIngredient';


export default function createIngredient(
    id: number,
    quantidade: number,
    medida: string,
    ingrediente: string,
    custo: number,
) {
    const novoIngrediente: IIngredient = {
        id: id,
        quantidade: quantidade,
        medida: medida,
        ingrediente: ingrediente,
        custo: custo
    }
    return novoIngrediente;
}