import mysql2 from "mysql2";
import dotenv from "dotenv";
import { log } from "console";
dotenv.config();

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "testDb",
  password: process.env.db_pass,
});

db.connect((err) => {
  if (err) log(err);
  return log("Connected to database successfully");
});

export default db;
