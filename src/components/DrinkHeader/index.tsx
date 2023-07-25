import styles from './DrinkHeader.module.css';
import pageStyle from '../../pages/DrinkSetupPage.module.css'

import React from "react";
import CostDisplay from "../CostDisplay";
import { IIngredient } from "../../shared/interfaces/IIngredient";
import DrinkName from "../DrinkName";
import HeaderImage from "../HeaderImage";

interface HeaderProps {
    listaIngredientes?: IIngredient[],
    drinkName: string,
    setDrinkName: (name: string) => void
    precoVenda: string,
    setPrecoVenda: (preco: string) => void
}

export default function Header({listaIngredientes, drinkName, setDrinkName, precoVenda, setPrecoVenda}: HeaderProps) {

    return (
        <header className={`${pageStyle.card} ${styles.cabecalho}`}>
            <HeaderImage />
            <DrinkName drinkName={drinkName} setDrinkName={setDrinkName}/>
            <CostDisplay listaItens={listaIngredientes} precoVenda={precoVenda} setPrecoVenda={setPrecoVenda}/>
        </header>
    )
};