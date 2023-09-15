import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    cartItems: [],
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const productId = product._id;
      const cartItem = state.cartItems?.find(
        (item) => item.product._id === productId
      );
      if (cartItem) {
        const updatedCart = state.cartItems.map((item) =>
          item.product._id === productId
            ? {
                ...item,
                quantity: cartItem.quantity + 1,
              }
            : item
        );
        state.cartItems = updatedCart;
      } else {
        state.cartItems?.push({
          product,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload._id;
      const cartItem = state.cartItems?.find(
        (item) => item.product._id === productId
      );
      let updatedCart;
      if (cartItem.quantity === 1) {
        updatedCart = state.cartItems.filter(
          (item) => item.product._id !== productId
        );
      } else {
        updatedCart = state.cartItems.map((item) =>
          item.product._id === productId
            ? {
                ...item,
                quantity: cartItem.quantity - 1,
              }
            : item
        );
      }
      state.cartItems = updatedCart;
    },
    clearCart: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
