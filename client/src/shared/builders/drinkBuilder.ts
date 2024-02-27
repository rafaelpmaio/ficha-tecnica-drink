import { IDrink } from "shared/interfaces/IDrink";

export default function drinkBuilder(
  {id,
  name,
  image,
  ingredients,
  steps,
  garnish,
  glassware,
  confectionCost,
  sellPrice,
  costPercentage} : IDrink
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
