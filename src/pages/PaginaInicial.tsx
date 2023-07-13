import React, { useState } from "react";
import Header from "../components/Header";
import IngredientsCard from "../components/IngredientsCard";
import { IIngredient } from "../shared/interfaces/IIngredient";
import './PaginaInicial.css';
import PreparationCard from "../components/PreparationCard";
import logo from './drink-logo.png';

import listaIngredientes from '../shared/records/Drinks.json';

export default function PaginaInicial() {

    const [lista, setLista] = useState(listaIngredientes);

    return (
        <>
            <Header listaIngredientes={lista}/>
            <main>
                <IngredientsCard listaIngredientes={lista} setListaIngredientes={setLista}/>
                <div className="block">
                <PreparationCard />
                <img src={logo} alt="" className="card drink-photo" />
                </div>
            </main>
        </>
    )
}