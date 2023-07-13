import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { IIngredient } from '../../shared/interfaces/IIngredient';

interface CostDisplayProps {
    listaItens?: IIngredient[]
}

export default function CostDisplay({ listaItens = []}: CostDisplayProps) {
    
    const [ precoVenda, setPrecoVenda ] = useState('');
    const [ precoVendaDisplayed, setPrecoVendaDisplayed ] = useState<string[]>([])

    const calculaCustoProducao = function(listaItens : IIngredient[]) {
        let custoTotal: number = 0;
        {listaItens.forEach(ingredient => custoTotal += ingredient.custo )}
        return custoTotal;
    }
    const calculaPorcentagemDeCusto = function (precoVenda: number, custoProducao: number ) {
        return (custoProducao / precoVenda) * 100;
    }
    const custoProducao = calculaCustoProducao(listaItens);
    const porcentagemCusto = calculaPorcentagemDeCusto(Number.parseFloat(precoVendaDisplayed[0]), custoProducao);

    return (
        <div>
            <p>Custo de Produção: {custoProducao}</p>
            { precoVendaDisplayed.map(preco => <p>Preço de Venda: R${preco}</p>)}
            <p>% de custo: {porcentagemCusto}</p>
            <Input 
                type='number' 
                id='preco-venda' 
                labelText='Preço de venda' 
                value={precoVenda} 
                aoDigitado={valor => setPrecoVenda(valor)}
            />
            <Button value='+' aoClickado={() => {setPrecoVendaDisplayed([precoVenda]); setPrecoVenda('')}}/>
        </div>
    )
};