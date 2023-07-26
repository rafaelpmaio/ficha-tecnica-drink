import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { IIngredient } from 'shared/interfaces/IIngredient';
import calculateCostPrice from './calculateCostPrice';
import calculateCostPercentage from './calculateCostPercentage';

interface CostDisplayProps {
    listaItens?: IIngredient[],
    precoVenda: string,
    setPrecoVenda: (preco: string) => void
}

export default function CostDisplay({ listaItens = [], precoVenda, setPrecoVenda }: CostDisplayProps) {
    const [precoVendaInput, setPrecoVendaInput] = useState('');

    const custoProducao = calculateCostPrice(listaItens);
    const porcentagemCusto = calculateCostPercentage(Number.parseFloat(precoVenda), custoProducao);
    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setPrecoVenda(precoVendaInput);
        setPrecoVendaInput('')
    }

    return (
        <div>
            <p>Custo de Produção: {custoProducao}</p>
            <p>Preço de Venda: R${precoVenda} </p>
            <p>% de custo: {porcentagemCusto ? porcentagemCusto : ''}</p>
            <span className={pageStyles.input_button_align}>
                <Input
                    type='number'
                    id='preco-venda'
                    labelText='Preço de venda'
                    value={precoVendaInput}
                    aoDigitado={valor => setPrecoVendaInput(valor)}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </div>
    )
};