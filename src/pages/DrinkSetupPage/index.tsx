import React, { useState } from "react";
import DrinkHeader from "components/DrinkHeader";
import IngredientsCard from "components/IngredientsCard";
import styles from './DrinkSetupPage.module.css';
import PreparationCard from "components/PreparationCard";
import ButtonSubmit from "components/ButtonSubmit";
import { IDrink } from "shared/interfaces/IDrink";
import { IIngredient } from "shared/interfaces/IIngredient";
import DrinkPhoto from "components/DrinkPhoto";
import calculateCostPrice from "components/CostDisplay/calculateCostPrice";
import calculateCostPercentage from "components/CostDisplay/calculateCostPercentage";
import { IStep } from "shared/interfaces/IStep";
import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";

export default function DrinkSetupPage() {

    const [ingredientsList, setIngredientsList] = useState<IIngredient[]>([]);
    const [drinkName, setDrinkName] = useState<string>('');
    const [stepsList, setStepsList] = useState<IStep[]>([]);
    const [garnish, setGarnish] = useState<string>('')
    const [glassware, setGlassware] = useState<string>('')
    const [precoVenda, setPrecoVenda] = useState<string>('')
    const custoProducao = calculateCostPrice(ingredientsList);
    const porcentagemCusto = calculateCostPercentage(Number.parseFloat(precoVenda), custoProducao);

    const newDrink: IDrink = {
        id:1,
        name: drinkName,
        image:'',
        ingredients: ingredientsList,
        steps: stepsList,
        garnish: garnish,
        glassware: glassware,
        confectionCost: custoProducao,
        sellPrice: Number.parseFloat(precoVenda),
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
                <DrinkHeader 
                    listaIngredientes={ingredientsList} 
                    drinkName={drinkName} 
                    setDrinkName={setDrinkName}
                    precoVenda={precoVenda}
                    setPrecoVenda={setPrecoVenda} 
                />
                <main>
                    <IngredientsCard ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
                    <div className={styles.preparation_and_drink_photo_block}>
                        <PreparationCard 
                            stepsList={stepsList} 
                            setStepsList={setStepsList}
                            garnish= {garnish}
                            setGarnish = {setGarnish}
                            glassware={glassware}
                            setGlassware={setGlassware}
                        />
                        <DrinkPhoto />
                    </div>
                </main>
                <ButtonSubmit buttonValue="Salvar Drink"/>
            </form>
        </>
    )
}
