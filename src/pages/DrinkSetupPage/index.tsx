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
import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';
import { IHeader } from 'shared/interfaces/IHeader';

export default function DrinkSetupPage() {
    const navigate = useNavigate();
    const { id, drinkName, ingredientsList, stepsList, garnish, glassware,
        sellPrice, totalCostValue, costPercentage, drinkImage } = useContext(DrinkCreationContext);
    const { setHeaderInfos, selectedCollection, datalistSelectedId } = useContext(DisplayedHeaderContext);
    let collectionNameWithoutSpecialChars = selectedCollection.name.replace(/[^\w]/g, '');

    let newDrink: IDrink = {
        id: id,
        name: drinkName,
        image: drinkImage,
        ingredients: ingredientsList,
        steps: stepsList,
        garnish: garnish,
        glassware: glassware,
        confectionCost: totalCostValue,
        sellPrice: Number.parseFloat(sellPrice),
        costPercentage: costPercentage
    }
    let newHeader: IHeader = {
        image: selectedCollection.image,
        title: selectedCollection.name,
        description: selectedCollection.description
    }
    const functionExecutedOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        selectedCollection.IDrinksList.push(newDrink);
        setHeaderInfos(newHeader);
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
