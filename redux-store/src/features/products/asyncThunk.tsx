import { createAsyncThunk } from "@reduxjs/toolkit";
const POSTS_URL = "https://api.escuelajs.co/api/v1/categories/3/products";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(POSTS_URL);
    const data = await response.json();
    return data;
  }
);
