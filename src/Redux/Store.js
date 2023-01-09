import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Reducers/counter.slice";
import cartSlice from "./Reducers/cart.slice";

// ROOT REDUCER
export default configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
  },
});
