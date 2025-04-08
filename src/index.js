import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json({ bodyParser: true }));
app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`server is running on port ${PORT}`);
  }
});
