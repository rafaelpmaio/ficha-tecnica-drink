import { IDrink } from "shared/interfaces/IDrink";

export default function drinkBuilder(
  {_id,
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
    _id,
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
