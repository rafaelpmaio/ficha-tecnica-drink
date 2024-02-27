import drink from "../models/Drink.js";

class DrinkController {
  static async listDrinks(req, res, next) {
    try {
      const drinksList = await drink.find({});
      res.status(200).json(drinksList);
    } catch (error) {
      next(error);
    }
  }

  static async getDrink(req, res, next) {
    try {
      const id = req.params.id;
      const selectedDrink = await drink.findById(id);
      res.status(200).json(selectedDrink);
    } catch (error) {
      next(error);
    }
  }

  static async createDrink(req, res, next) {
    try {
      const newDrink = await drink.create(req.body);
      res.status(201).json({ message: "drink created", drink: newDrink });
    } catch (error) {
      next(error);
    }
  }

  static async updateDrink(req, res, next) {
    try {
      const id = req.params.id;
      await drink.findByIdAndUpdate(id, req.body);
      res.status(201).json({ message: "drink atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteDrink(req, res, next) {
    try {
      const id = req.params.id;
      await drink.findByIdAndDelete(id);
      res.status(200).json({ message: "drink removido com sucesso" });
    } catch (error) {
      next(error);
    }
  }
}

export default DrinkController;
