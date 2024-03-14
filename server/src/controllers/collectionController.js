import collection from "../models/Collection.js";
import { drink } from "../models/Drink.js";

class CollectionController {
  static async listCollections(req, res) {
    try {
      const collectionsList = await collection.find({});
      res.status(200).json(collectionsList);
    } catch (error) {
      console.log(error);
    }
  }

  static async getCollection(req, res) {
    try {
      const id = req.params.id;
      const selectedCollection = await collection.findById(id);
      res.status(200).json(selectedCollection);
    } catch (error) {
      console.log(error);
    }
  }

  static async createCollection(req, res) {
    try {
      const newCollection = await collection.create(req.body);
      res
        .status(201)
        .json({ message: "collection created", collection: newCollection });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateCollection(req, res) {
    const updatedData = req.body;
    const drinksIds = updatedData.drinksList;
    try {
      const id = req.params.id;
      const drinks = await drink.find().where("_id").in(drinksIds).exec();

      // eslint-disable-next-line no-unused-vars
      const { drinksList, ...data } = updatedData;
      const updatedCollection = { ...data };

      await collection.updateOne(
        { _id: id },
        {
          ...updatedCollection,
          $push: { drinksList: { $each: drinks } },
        }
      );

      res.status(201).json({ message: "collection updated", drinks: drinks });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteCollection(req, res) {
    try {
      const id = req.params.id;
      await collection.findByIdAndDelete(id);
      res.status(201).json({ message: "collection deleted" });
    } catch (error) {
      console.log(error);
    }
  }

  //  SOFT DELETE QUE SERÁ IMPLEMENTADO POSTERIORMENTE
  //   static async deleteCollection(req, res) {
  //     try {
  //       const id = req.params.id;
  //       await collection.findByIdAndUpdate(id, {deleted: true});
  //       res.status(201).json({ message: "collection deleted" });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
}

export default CollectionController;
