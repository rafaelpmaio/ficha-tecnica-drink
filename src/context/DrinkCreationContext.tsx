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
    precoVenda: string,
    setPrecoVenda: (precoVenda: string) => void,
}

export const DrinkCreationContext = React.createContext({} as DrinkCreationContextProps)

export const DrinkCreationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [id, setId] = useState<number>(0);
    const [ingredientsList, setIngredientsList] = useState<IIngredient[]>([]);
    const [drinkName, setDrinkName] = useState<string>('');
    const [stepsList, setStepsList] = useState<IStep[]>([]);
    const [garnish, setGarnish] = useState<string>('');
    const [glassware, setGlassware] = useState<string>('');
    const [precoVenda, setPrecoVenda] = useState<string>('');

    return (
        <DrinkCreationContext.Provider value={{
            id, setId,
            ingredientsList, setIngredientsList,
            drinkName, setDrinkName,
            stepsList, setStepsList,
            garnish, setGarnish,
            glassware, setGlassware,
            precoVenda, setPrecoVenda
        }}>
            {children}
        </DrinkCreationContext.Provider>
    )
}
