import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    items: [
        {
            id: 1,
            name: 'Dosa Tava',
            price: 299
        },
        {
            id: 2,
            name: 'Pressure Cooker',
            price: 1266
        },
        {
            id: 3,
            name: 'Empty Containers',
            price: 355
        },
        {
            id: 4,
            name: 'Knife',
            price: 78
        },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // return state.items
      state.cart.push(product)
    },
    removeProduct: (state, action) => {
      state.value -= 1
    },
    incrementByQuantity: (state, action) => {
        state.value -= 1
      },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, incrementByQuantity } = cart.actions

export default cart.reducer