import React, { useState } from "react";
import Header from "../components/Header";
import IngredientsCard from "../components/IngredientsCard";
import { IIngredient } from "../shared/interfaces/IIngredient";
import './PaginaInicial.css';
import PreparationCard from "../components/PreparationCard";
import logo from './drink-logo.png';

import listaIngredientes from '../shared/records/Drinks.json';
import FormButton from "../components/FormButton";
import { IDrink } from "../shared/interfaces/IDrink";

export default function PaginaInicial() {

    const [lista, setLista] = useState(listaIngredientes);
    const [drinkName, setDrinkName] = useState<string[]>(['Margarita']);
    const [listaSteps, setListaSteps] = useState<string[]>([]);
    const [garnish, setGarnish] = useState<string[]>([])
    const [glassware, setGlassware] = useState<string[]>([])
    const [precoVenda, setPrecoVenda] = useState<number[]>([])

    const novoDrink: IDrink = {
        name: drinkName[0],
        ingredients: lista,
        steps: listaSteps,
        garnish:garnish[0],
        glassware:glassware[0],
        confectionCost:1,
        sellPrice: precoVenda[0],
        costPercentage:1
    }

    const clicado = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(novoDrink);
    }
    return (
        <>
            <form onSubmit={clicado}>
                <Header 
                    listaIngredientes={lista} 
                    drinkName={drinkName} 
                    setDrinkName={setDrinkName}
                    precoVenda={precoVenda}
                    setPrecoVenda={setPrecoVenda} 
                />
                <main>
                    <IngredientsCard listaIngredientes={lista} setListaIngredientes={setLista} />
                    <div className="block">
                        <PreparationCard 
                            listaSteps={listaSteps} 
                            setListaSteps={setListaSteps}
                            garnish= {garnish}
                            setGarnish = {setGarnish}
                            glassware={glassware}
                            setGlassware={setGlassware}
                        />
                        <img src={logo} alt="" className="card drink-photo" />
                    </div>
                </main>
                <FormButton />
            </form>
        </>
    )
}