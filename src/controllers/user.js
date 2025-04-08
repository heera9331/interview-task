import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  const pw = await bcrypt.hash(password, 10);
  return pw;
};

const compareHashPassword = async (password, hashedPassword) => {
  const passwordMatch = await bcrypt.compare(password, hashedPassword);
  return passwordMatch;
};

const createUser = async (req, res) => {
  try {
    console.log("user nadf");
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!name || !email || !password) {
      return res.json({ error: "name, email or password missing" });
    }

    if (user) {
      return res.json({ error: "user already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return res.json({ user: newUser, message: "user created" });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ error: "email or password not found" });

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.json({ error: "user not exists" });
    }

    const result = await compareHashPassword(password, user.password);

    if (!result) return res.json({ error: "unauthorized" });

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ message: "user login success", token });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export { createUser, loginUser };
