import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { IIngredient } from '../../shared/interfaces/IIngredient';

interface CostDisplayProps {
    listaItens?: IIngredient[],
    precoVenda: number[],
    setPrecoVenda: (array: number[]) => void
}

export default function CostDisplay({ listaItens = [], precoVenda, setPrecoVenda }: CostDisplayProps) {

    const [precoVendaInput, setPrecoVendaInput] = useState(0);

    const calculaCustoProducao = function (listaItens: IIngredient[]) {
        let custoTotal: number = 0;
        { listaItens.forEach(ingredient => custoTotal += ingredient.custo) }
        return custoTotal;
    }
    const calculaPorcentagemDeCusto = function (precoVenda: number, custoProducao: number) {
        precoVenda 
            ? precoVenda = precoVenda
            : precoVenda = custoProducao
        return (custoProducao / precoVenda) * 100;
    }
    const custoProducao = calculaCustoProducao(listaItens);
    const porcentagemCusto = calculaPorcentagemDeCusto(precoVenda[0], custoProducao);

    return (
        <div>
            <p>Custo de Produção: {custoProducao}</p>
            {precoVenda.map(preco => <p>Preço de Venda: R${preco}</p>)}
            <p>% de custo: {porcentagemCusto}</p>
            <span className='input-button-align'>
                <Input type='number' id='preco-venda' labelText='Preço de venda' value={precoVendaInput} 
                aoDigitado={valor => setPrecoVendaInput(valor as number)} />
                <Button value='+' aoClickado={() => { setPrecoVenda([precoVendaInput]); setPrecoVendaInput(0) }} />
            </span>
        </div>
    )
};