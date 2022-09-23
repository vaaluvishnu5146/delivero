import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Reducers/counter.slice'
import cartSlice from './Reducers/cart.slice'
export default configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice
  },
})