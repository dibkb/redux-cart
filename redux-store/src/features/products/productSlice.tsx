import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchProducts } from "./asyncThunk";
const initialState: ProductsState = {
  products: [],
  status: "IDLE",
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "LOADING";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "SUCCEEDED";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "FAILED";
    });
  },
});

export default productSlice.reducer;
type status = "IDLE" | "LOADING" | "SUCCEEDED" | "FAILED";
export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
};
export interface ProductsState {
  products: ProductType[];
  status: status;
}
