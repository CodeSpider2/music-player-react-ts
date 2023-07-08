import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routers/router.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
dotenv.config();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/music", express.static(path.join(__dirname, "music")));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} ...`);
});
