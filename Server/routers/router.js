import express from "express";
import {
  getMusic,
  loginUser,
  playMusic,
  postUsers,
} from "../controllers/controllers.js";

const router = express.Router();

router.post("/auth/signup", postUsers);
router.post("/auth/login", loginUser);
router.get("/music/:track", playMusic);
router.get("/tracks/all", getMusic);
export default router;
