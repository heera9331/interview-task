import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import crypto from "crypto";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

// /api

app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`server is running on port ${PORT}`);
  }
});
