import React, { useState } from "react";
import { IIngredient } from "shared/interfaces/IIngredient";
import { IStep } from "shared/interfaces/IStep";

interface DrinkCreationContextProps {
  id: number;
  setId: (id: number) => void;
  ingredients: IIngredient[];
  setIngredients: (ingredients: IIngredient[]) => void;
  name: string;
  setName: (name: string) => void;
  steps: IStep[];
  setSteps: (steps: IStep[]) => void;
  garnish: string;
  setGarnish: (garnish: string) => void;
  glassware: string;
  setGlassware: (glassware: string) => void;
  sellPrice: number;
  setSellPrice: (precoVenda: number) => void;
  confectionCost: number;
  setConfectionCost: (totalCost: number) => void;
  costPercentage: number;
  setCostPercentage: (totalCost: number) => void;
  image: string;
  setImage: (image: string) => void;
}

export const DrinkCreationContext = React.createContext(
  {} as DrinkCreationContextProps
);

export const DrinkCreationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [id, setId] = useState<number>(0);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [name, setName] = useState<string>("");
  const [steps, setSteps] = useState<IStep[]>([]);
  const [garnish, setGarnish] = useState<string>("");
  const [glassware, setGlassware] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<number>(0);
  const [confectionCost, setConfectionCost] = useState<number>(0);
  const [costPercentage, setCostPercentage] = useState<number>(0);
  const [image, setImage] = useState<string>("");

  return (
    <DrinkCreationContext.Provider
      value={{
        id,
        setId,
        ingredients,
        setIngredients,
        name,
        setName,
        steps,
        setSteps,
        garnish,
        setGarnish,
        glassware,
        setGlassware,
        sellPrice,
        setSellPrice,
        confectionCost,
        setConfectionCost,
        costPercentage,
        setCostPercentage,
        image,
        setImage,
      }}
    >
      {children}
    </DrinkCreationContext.Provider>
  );
};
