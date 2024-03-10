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


  //fiz funcionar pesquisando 1 drink e montando o drinklist, agora tenho que fazer funcionar armazenando um array
  static async updateCollection(req, res) {
    const updatedData = req.body;

    try {
      const id = req.params.id;
      const selectedDrink = await drink.findById(updatedData.drinksList);
      const updatedCollection = {
        ...updatedData,
        drinksList: { ...selectedDrink._doc },
      };

      await collection.findByIdAndUpdate(id, updatedCollection);
      res.status(201).json({ message: "collection updated", updatedCol: updatedCollection });
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
