import express from "express";
import connectToDatabase from "../src/config/dbConnect.js";
import routes from "./routes/index.js";
import errorsManipulator from "./middlewares/errorsManipulator.js";

const connection = await connectToDatabase();

connection.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

connection.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();

routes(app);

app.use(errorsManipulator);

export default app;
