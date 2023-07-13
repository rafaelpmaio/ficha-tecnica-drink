import './Header.css';
import React from "react";
import CostDisplay from "../CostDisplay";
import { IIngredient } from "../../shared/interfaces/IIngredient";
import DrinkName from "../DrinkName";
import HeaderImage from "../HeaderImage";

interface HeaderProps {
    listaIngredientes?: IIngredient[],
    drinkName: string[],
    setDrinkName: (array: string[]) => void
    precoVenda: number[],
    setPrecoVenda: (array: number[]) => void
}

export default function Header({listaIngredientes, drinkName, setDrinkName, precoVenda, setPrecoVenda}: HeaderProps) {

    return (
        <header className="card cabecalho">
            <HeaderImage />
            <DrinkName drinkName={drinkName} setDrinkName={setDrinkName}/>
            <CostDisplay listaItens={listaIngredientes} precoVenda={precoVenda} setPrecoVenda={setPrecoVenda}/>
        </header>
    )
};