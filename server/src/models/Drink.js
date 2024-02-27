import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  amount: {type: Number},
  measure: {type: String},
  ingredient: {type: String},
  cost: {type: Number}
});

const drinkSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, required: [true, "the drink name is missing"]},
  image: {type: String},
  ingredients: {type: [ingredientSchema], required: [true, "the drink ingredients are missing"]},
  steps: {type: [String], required: [true, "you forgot to set the steps"]},
  garnish: {type: String},
  glassware: {type: String},
  confectionCost: {type: Number},
  sellPrice: {type: Number},
  costPercentage: {type: Number}
}, {versionKey: false});


const drink = mongoose.model("drinks", drinkSchema);

export default drink;
