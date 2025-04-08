import express from "express";
import { loginUser, createUser } from "../controllers/index.js";
const authRouter = express.Router();

// /api/auth

// /api/auth/register
authRouter.post("/register", createUser);

// /api/auth/login
authRouter.post("/login", loginUser);

export default authRouter;
