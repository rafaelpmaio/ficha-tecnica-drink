import axios from "axios";

const httpCollections = axios.create({
  baseURL: "http://localhost:3001/",
});

export { httpCollections };
