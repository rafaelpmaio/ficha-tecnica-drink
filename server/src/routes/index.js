import express from "express";
import drinks from "./drinksRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), drinks);
};

export default routes;
