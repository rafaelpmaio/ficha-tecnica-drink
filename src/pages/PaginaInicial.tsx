import React, { useState } from "react";
import Header from "../components/Header";
import IngredientsCard from "../components/IngredientsCard";
import styles from './PaginaInicial.module.css';
import PreparationCard from "../components/PreparationCard";

import listaIngredientes from '../shared/records/Drinks.json';
import FormButton from "../components/FormButton";
import { IDrink } from "../shared/interfaces/IDrink";
import { IIngredient } from "../shared/interfaces/IIngredient";
import DrinkPhoto from "../components/DrinkPhoto";
import calculateCostPrice from "../components/CostDisplay/calculateCostPrice";
import calculateCostPercentage from "../components/CostDisplay/calculateCostPercentage";

export default function PaginaInicial() {

    const [lista, setLista] = useState<IIngredient[]>(listaIngredientes);
    const [drinkName, setDrinkName] = useState<string>('Margarita');
    const [listaSteps, setListaSteps] = useState<string[]>([]);
    const [garnish, setGarnish] = useState<string>('')
    const [glassware, setGlassware] = useState<string>('')
    const [precoVenda, setPrecoVenda] = useState<number>(0)
    const custoProducao = calculateCostPrice(lista);
    const porcentagemCusto = calculateCostPercentage(precoVenda, custoProducao);

    const newDrink: IDrink = {
        name: drinkName[0],
        ingredients: lista,
        steps: listaSteps,
        garnish: garnish,
        glassware: glassware,
        confectionCost: custoProducao,
        sellPrice: precoVenda,
        costPercentage: porcentagemCusto
    }
    const functionExecutedOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert('form submited')
        console.log(newDrink);
    }

    return (
        <>
            <form onSubmit={functionExecutedOnSubmit}>
                <Header 
                    listaIngredientes={lista} 
                    drinkName={drinkName} 
                    setDrinkName={setDrinkName}
                    precoVenda={precoVenda}
                    setPrecoVenda={setPrecoVenda} 
                />
                <main>
                    <IngredientsCard listaIngredientes={lista} setListaIngredientes={setLista} />
                    <div className={styles.preparation_and_drink_photo_block}>
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
