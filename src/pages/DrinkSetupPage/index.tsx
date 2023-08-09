import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import DrinkSetupHeader from "components/DrinkSetupHeader";
import IngredientsCard from "components/IngredientsCard";
import PreparationCard from "components/PreparationCard";
import ButtonSubmit from "components/ButtonSubmit";
import DrinkPhoto from "components/DrinkPhoto";
import styles from './DrinkSetupPage.module.css';
import { IDrink } from 'shared/interfaces/IDrink';
import { DrinkCreationContext } from "context/DrinkCreationContext";
import { CollectionsContext } from 'context/CollectionContext';

export default function DrinkSetupPage() {
    const { id, drinkName, ingredientsList, stepsList, garnish, glassware,
        sellPrice, totalCostValue, costPercentage } = useContext(DrinkCreationContext);
    const { selectedCollection, datalistSelectedId } = useContext(CollectionsContext);
    const navigate = useNavigate();
    let collectionNameWithoutSpecialChars = selectedCollection.name.replace(/[^\w]/g, '');

    let newDrink: IDrink = {
        id: id,
        name: drinkName,
        image: 'drink-logo.png',
        ingredients: ingredientsList,
        steps: stepsList,
        garnish: garnish,
        glassware: glassware,
        confectionCost: totalCostValue,
        sellPrice: Number.parseFloat(sellPrice),
        costPercentage: costPercentage
    }

    const functionExecutedOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(newDrink);
        selectedCollection.IDrinksList.push(newDrink)
        navigate(`/collection/${datalistSelectedId}#${collectionNameWithoutSpecialChars}`);
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
