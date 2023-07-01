import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routers/router.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} ...`);
});
