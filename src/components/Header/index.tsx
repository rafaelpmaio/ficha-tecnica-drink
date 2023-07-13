import './Header.css';
import React from "react";
import CostDisplay from "../CostDisplay";
import { IIngredient } from "../../shared/interfaces/IIngredient";
import DrinkName from "../DrinkName";
import HeaderImage from "../HeaderImage";

interface HeaderProps {
    listaItens?: IIngredient[]
}

export default function Header({listaItens}: HeaderProps) {

    return (
        <header className="card cabecalho">
            <HeaderImage />
            <DrinkName />
            <CostDisplay listaItens={listaItens}/>
        </header>
    )
};