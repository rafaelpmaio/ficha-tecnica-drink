import pageStyles from '../../pages/PaginaInicial.module.css';

import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { IIngredient } from '../../shared/interfaces/IIngredient';
import calculateCostPrice from './calculateCostPrice';
import calculateCostPercentage from './calculateCostPercentage';

interface CostDisplayProps {
    listaItens?: IIngredient[],
    precoVenda: number,
    setPrecoVenda: (preco: number) => void
}

export default function CostDisplay({ listaItens = [], precoVenda, setPrecoVenda }: CostDisplayProps) {
    const [precoVendaInput, setPrecoVendaInput] = useState(0);

    const custoProducao = calculateCostPrice(listaItens);
    const porcentagemCusto = calculateCostPercentage(precoVenda, custoProducao);
    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setPrecoVenda(precoVendaInput);
        setPrecoVendaInput(0)
    }

    return (
        <div>
            <p>Custo de Produção: {custoProducao}</p>
            <p>Preço de Venda: R${precoVenda} </p>
            <p>% de custo: {porcentagemCusto}</p>
            <span className={pageStyles.input_button_align}>
                <Input
                    type='number'
                    id='preco-venda'
                    labelText='Preço de venda'
                    value={precoVendaInput}
                    aoDigitado={valor => setPrecoVendaInput(Number.parseFloat(valor))}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </div>
    )
};