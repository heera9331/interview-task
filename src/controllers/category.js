import express from "express";
import prisma from "../lib/prisma.js";

const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    return res.json({ categories });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.body.params;
    const category = await prisma.category.findUnique(id);
    return res.json({ category });
  } catch (error) {
    return res.json({ error: error.message }).status(500);
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({
      data: {
        name,
      },
    });
    return res.json({ category });
  } catch (error) {
    return res.json({ error: error.message }).status(500);
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const intId = Number(id);
    const category = await prisma.category.delete({ where: { id: intId } });
    return res.json({ category, message: "category deleted" });
  } catch (error) {
    return res.json({ error: error.message }).status(500);
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const intID = Number(id);
    const updatedCategory = await prisma.category.update({
      where: {
        id: intID,
      },
      data: {
        name,
      },
    });

    return res.json({ message: "category updated", category: updatedCategory });
  } catch (error) {
    return res.json({ error: error.message }).status(500);
  }
};

export {
  createCategory,
  deleteCategoryById,
  updateCategoryById,
  getAllCategories,
  getCategoryById,
};
