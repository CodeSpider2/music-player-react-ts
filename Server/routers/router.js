import express from "express";
import { postUsers } from "../controllers/controllers.js";

const router = express.Router();

router.post("/auth", postUsers);
export default router;
