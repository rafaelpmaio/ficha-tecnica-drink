import { IDrink } from "shared/interfaces/IDrink";
import { IIngredient } from "shared/interfaces/IIngredient";
import { IStep } from "shared/interfaces/IStep";

export default function drinkBuilder(
  id: number,
  name: string,
  image: string,
  ingredients: IIngredient[],
  steps: IStep[],
  garnish: string,
  glassware: string,
  confectionCost: number,
  sellPrice: number,
  costPercentage: number,
) {

  const drink: IDrink = {
    id,
    name,
    image,
    ingredients,
    steps,
    garnish,
    glassware,
    confectionCost,
    sellPrice,
    costPercentage,
  };

  return drink;
}
