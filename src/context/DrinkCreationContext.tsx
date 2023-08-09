import React, { useState } from "react";
import { IIngredient } from "shared/interfaces/IIngredient";
import { IStep } from "shared/interfaces/IStep";

interface DrinkCreationContextProps {
    id: number,
    setId: (id: number) => void,
    ingredientsList: IIngredient[],
    setIngredientsList: (ingredients: IIngredient[]) => void,
    drinkName: string,
    setDrinkName: (name: string) => void,
    stepsList: IStep[],
    setStepsList: (steps: IStep[]) => void,
    garnish: string,
    setGarnish: (garnish: string) => void,
    glassware: string,
    setGlassware: (glassware: string) => void,
    sellPrice: string,
    setSellPrice: (precoVenda: string) => void,
    totalCostValue: number,
    setTotalCostValue: (totalCost: number) => void
    costPercentage: number,
    setCostPercentage: (totalCost: number) => void
}

export const DrinkCreationContext = React.createContext({} as DrinkCreationContextProps)

export const DrinkCreationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [id, setId] = useState<number>(0);
    const [ingredientsList, setIngredientsList] = useState<IIngredient[]>([]);
    const [drinkName, setDrinkName] = useState<string>('');
    const [stepsList, setStepsList] = useState<IStep[]>([]);
    const [garnish, setGarnish] = useState<string>('');
    const [glassware, setGlassware] = useState<string>('');
    const [sellPrice, setSellPrice] = useState<string>('0');
    const [totalCostValue, setTotalCostValue] = useState<number>(0);
    const [costPercentage, setCostPercentage] = useState<number>(0);


    return (
        <DrinkCreationContext.Provider value={{
            id, setId,
            ingredientsList, setIngredientsList,
            drinkName, setDrinkName,
            stepsList, setStepsList,
            garnish, setGarnish,
            glassware, setGlassware,
            sellPrice, setSellPrice,
            totalCostValue, setTotalCostValue,
            costPercentage, setCostPercentage
        }}>
            {children}
        </DrinkCreationContext.Provider>
    )
}
