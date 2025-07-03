import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
// This code defines a Mongoose schema for a Product model with fields for name, price, and image.
// It also includes timestamps to track when each product was created and last updated.
