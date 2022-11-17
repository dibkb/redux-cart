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
  title: string;
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};
export interface ProductsState {
  products: ProductType[];
  status: status;
}
