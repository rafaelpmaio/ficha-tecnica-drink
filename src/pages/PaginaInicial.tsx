import React, { useState } from "react";
import Header from "../components/Header";
import IngredientsCard from "../components/IngredientsCard";
import styles from './PaginaInicial.module.css';
import PreparationCard from "../components/PreparationCard";

import listaIngredientes from '../shared/records/Drinks.json';
import FormButton from "../components/FormButton";
import { IDrink } from "../shared/interfaces/IDrink";
import { calculaCustoProducao, calculaPorcentagemDeCusto } from "../components/CostDisplay";
import { IIngredient } from "../shared/interfaces/IIngredient";
import DrinkPhoto from "../components/DrinkPhoto";

export default function PaginaInicial() {

    const [lista, setLista] = useState<IIngredient[]>(listaIngredientes);
    const [drinkName, setDrinkName] = useState<string[]>(['Margarita']);
    const [listaSteps, setListaSteps] = useState<string[]>([]);
    const [garnish, setGarnish] = useState<string[]>([])
    const [glassware, setGlassware] = useState<string[]>([])
    const [precoVenda, setPrecoVenda] = useState<number[]>([])
    const custoProducao = calculaCustoProducao(lista);
    const porcentagemCusto = calculaPorcentagemDeCusto(precoVenda[0], custoProducao);

    const novoDrink: IDrink = {
        name: drinkName[0],
        ingredients: lista,
        steps: listaSteps,
        garnish: garnish[0],
        glassware: glassware[0],
        confectionCost: custoProducao,
        sellPrice: precoVenda[0],
        costPercentage: porcentagemCusto
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert('teste de captura do objeto drink exibido no console log')
        console.log(novoDrink);
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <Header 
                    listaIngredientes={lista} 
                    drinkName={drinkName} 
                    setDrinkName={setDrinkName}
                    precoVenda={precoVenda}
                    setPrecoVenda={setPrecoVenda} 
                />
                <main>
                    <IngredientsCard listaIngredientes={lista} setListaIngredientes={setLista} />
                    <div className={styles.block}>
                        <PreparationCard 
                            listaSteps={listaSteps} 
                            setListaSteps={setListaSteps}
                            garnish= {garnish}
                            setGarnish = {setGarnish}
                            glassware={glassware}
                            setGlassware={setGlassware}
                        />
                        <DrinkPhoto />
                    </div>
                </main>
                <FormButton />
            </form>
        </>
    )
}
