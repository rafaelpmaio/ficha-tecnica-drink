import { IIngredient } from "shared/interfaces/IIngredient";
import { IStep } from "shared/interfaces/IStep";

function validate(ingredients: IIngredient[], steps: IStep[]) {
  if (!ingredients.length) {
    alert("You forgot to set the ingredients!");
    throw Error
  }
  if (!steps.length) {
    alert("You forgot to set the steps!");
    throw Error
  }
}

export default validate