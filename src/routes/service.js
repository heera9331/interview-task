import express from "express";
import {
  getAllServices,
  createService,
  updateServiceById,
  deleteServiceById,
  getServiceById,
} from "../controllers/index.js";

const serviceRouter = express.Router();

serviceRouter.get("/", getAllServices);
serviceRouter.get("/:id", getServiceById);
serviceRouter.post("/", createService);
serviceRouter.patch("/:id", updateServiceById);
serviceRouter.delete("/:id", deleteServiceById);

export default serviceRouter;
