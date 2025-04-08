import prisma from "../lib/prisma.js";

const getAllServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    return res.json({ services });
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.body.params;
    const service = await prisma.service.findUnique(id);
    return res.json({ service });
  } catch (error) {
    return res.json({ error: error.message }).status(500);
  }
};

const createService = async (req, res) => {
  try {
    const { name, content, type, categoryId, priceOptions } = req.body;
    const user = req.user;

    const service = await prisma.service.create({
      data: {
        name,
        content,
        type,
        categoryId: Number(categoryId),
        priceOptions,
        authorId: Number(user.id),
      },
    });

    return res.json({ service });
  } catch (error) {
    return res.json({ error: error.message }).status(500);
  }
};

const deleteServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await prisma.service.delete({ where: { id: Number(id) } });
    return res.json({ service, message: "service deleted" });
  } catch (error) {
    return res.json({ error: error.message }).status(500);
  }
};

const updateServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content, type, categoryId, priceOptions, authorId } =
      req.body;
    const user = req.user;

    const service = await prisma.service.update({
      where: { id: Number(id) },
      data: {
        name,
        content,
        type,
        categoryId: Number(categoryId),
        priceOptions,
        authorId: Number(user.id),
      },
    });
    return res.json({ service, message: "service is updated" });
  } catch (error) {
    return res.json({ error: error.message }).status(500);
  }
};

export {
  createService,
  updateServiceById,
  deleteServiceById,
  getAllServices,
  getServiceById,
};
