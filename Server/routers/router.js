import express from "express";
import { loginUser, postUsers } from "../controllers/controllers.js";

const router = express.Router();

router.post("/auth/signup", postUsers);
router.post("/auth/login", loginUser);
export default router;
