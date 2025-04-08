import express from "express";
import {
  createCategory,
  updateCategoryById,
  getAllCategories,
  deleteCategoryById,
  getCategoryById,
} from "../controllers/index.js";

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.patch("/:id", updateCategoryById);
categoryRouter.delete("/:id", deleteCategoryById);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategoryById);

export default categoryRouter;
