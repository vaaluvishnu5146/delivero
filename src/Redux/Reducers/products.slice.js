import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    saveAllProducts: (state, action) => {
      const product = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // return state.items
      state.products = product;
    },
    getAllProducts: (state, action) => {
      state.value -= 1;
    },
    getAllProductsByNamespace: (state, action) => {
      state.value -= 1;
    },
    incrementByQuantity: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveAllProducts,
  getAllProducts,
  incrementByQuantity,
} = product.actions;

export default product.reducer;
