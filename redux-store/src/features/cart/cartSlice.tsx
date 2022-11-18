import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export interface CartSlice {
  items: { productId: number; count: number }[];
}
const initialState: CartSlice = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const findMatch = state.items.find((ele) => ele.productId === id);
      if (findMatch) {
        findMatch.count++;
      } else {
        state.items.push({
          productId: id,
          count: 1,
        });
      }
    },
  },
});
export const totalCartItems = (state: RootState) => {
  let nums = 0;
  for (const items of state.cart.items) {
    nums += items.count;
  }
  return nums;
};
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
