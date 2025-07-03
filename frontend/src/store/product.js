import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    const name = newProduct.name?.trim();
    const price = newProduct.price?.toString().trim();
    const image = newProduct.image?.trim();

    if (!name || !price || !image) {
      return {
        success: false,
        message: `All fields are required. Missing: ${!name ? "name " : ""},${
          !price ? "price " : ""
        },${!image ? "image" : ""}`,
      };
    }

    // Validate price is a number
    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      return {
        success: false,
        message: "Price must be a valid positive number",
      };
    }

    try {
      const productData = {
        name: name,
        price: parseFloat(price),
        image: image,
      };

      console.log("Sending to API:", productData);

      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const data = await res.json();

      if (!res.ok) {
        return {
          success: false,
          message: data.message || "Something went wrong",
        };
      }

      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      console.error("Network error:", error);
      return { success: false, message: "Network error occurred" };
    }
  },

  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      if (res.ok) {
        set({ products: data.data });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  deleteProduct: async (pid) => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "DELETE",
      });

      if (res.ok) {
        set((state) => ({
          products: state.products.filter((product) => product._id !== pid),
        }));
        return { success: true, message: "Product deleted successfully" };
      } else {
        return { success: false, message: "Failed to delete product" };
      }
    } catch (error) {
      return { success: false, message: "Network error occurred" };
    }
  },
}));
