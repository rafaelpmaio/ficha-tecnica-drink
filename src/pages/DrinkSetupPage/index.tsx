import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import DrinkSetupHeader from "components/DrinkSetupHeader";
import IngredientsCard from "components/IngredientsCard";
import PreparationCard from "components/PreparationCard";
import ButtonSubmit from "components/ButtonSubmit";
import DrinkPhoto from "components/DrinkPhoto";
import calculateCostPrice from 'components/CostDisplay/calculateCostPrice';
import calculateCostPercentage from 'components/CostDisplay/calculateCostPercentage';
import styles from './DrinkSetupPage.module.css';
import { IDrink } from 'shared/interfaces/IDrink';
import { DrinkCreationContext } from "context/DrinkCreationContext";
import { CollectionsContext } from 'context/CollectionContext';
import addDrinkToList from './addDrinkToList';


export default function DrinkSetupPage() {
    const { id, drinkName, ingredientsList, stepsList, garnish, glassware, precoVenda } = useContext(DrinkCreationContext);
    const { collectionsList, datalistSelectedId } = useContext(CollectionsContext);
    const navigate = useNavigate();
    const custoProducao = calculateCostPrice(ingredientsList);
    const porcentagemCusto = calculateCostPercentage(Number.parseFloat(precoVenda), custoProducao);
    let newDrink: IDrink = {
        id: id,
        name: drinkName,
        image: 'drink-logo.png',
        ingredients: ingredientsList,
        steps: stepsList,
        garnish: garnish,
        glassware: glassware,
        confectionCost: custoProducao,
        sellPrice: Number.parseFloat(precoVenda),
        costPercentage: porcentagemCusto
    }

    const functionExecutedOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(newDrink);
        addDrinkToList(newDrink, collectionsList, datalistSelectedId)
        //configurar reset da página drinksetup
        navigate('/collection/1#SummerSeason');
    }

    return (
        <form onSubmit={functionExecutedOnSubmit}>
            <DrinkSetupHeader />
            <main>
                <IngredientsCard />
                <div className={styles.preparation_and_drink_photo_block}>
                    <PreparationCard />
                    <DrinkPhoto />
                </div>
            </main>
            <ButtonSubmit buttonValue="Salvar Drink" />
        </form>
    )
};
