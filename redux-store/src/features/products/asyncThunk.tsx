import { createAsyncThunk } from "@reduxjs/toolkit";
const POSTS_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(POSTS_URL);
    const data = await response.json();
    return data;
  }
);
