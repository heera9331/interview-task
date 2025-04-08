import categoryRouter from "./category.js";
import serviceRouter from "./service.js";
import authRouter from "./auth.js";
import authenticateToken from "../middlewares/auth.js";
import express from "express";

// /api
const router = express.Router();

// /api/category
router.use("/category",authenticateToken, categoryRouter);
// /api/service
router.use("/service", authenticateToken, serviceRouter);
// /api/auth
router.use("/auth", authRouter);

export default router;
