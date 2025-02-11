import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Package from "./models/Package.js";

const app = express();
const PORT = 5000;

// app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/traveladvisor")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/packages", async (req, res) => {
  try {
    const packages = await Package.find();
    res.json({ packages });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch packages" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
