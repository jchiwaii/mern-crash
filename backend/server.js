import express from "express";
import dotenv from "dotenv";
import { connect, mongo } from "mongoose";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";
import mongoose from "mongoose";
import path from "path";
import products from "./routes/Product.js";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json()); // Middleware to parse JSON bodies

// API routes - these should come before the static files
app.use("/api/products", products);

if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  // Handle React routing - specific route handlers instead of catch-all
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
  });

  app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
  });

  // Fallback for other routes
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on http://localhost:" + PORT);
});
