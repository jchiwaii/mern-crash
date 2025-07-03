import express from "express";
import dotenv from "dotenv";
import { connect, mongo } from "mongoose";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";
import mongoose from "mongoose";
import products from "./routes/Product.js";

dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/products", products);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on http://localhost:3000");
});
