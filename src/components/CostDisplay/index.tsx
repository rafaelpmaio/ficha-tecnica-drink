import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import React, { useContext, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import calculateCostPrice from './calculateCostPrice';
import calculateCostPercentage from './calculateCostPercentage';
import { DrinkCreationContext } from 'context/DrinkCreationContext';


export default function CostDisplay() {
    const { ingredientsList, precoVenda, setPrecoVenda } = useContext(DrinkCreationContext);
    const [precoVendaInput, setPrecoVendaInput] = useState('');
    const custoProducao = calculateCostPrice(ingredientsList);
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
                    onChange={valor => setPrecoVendaInput(valor)}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </div>
    )
};