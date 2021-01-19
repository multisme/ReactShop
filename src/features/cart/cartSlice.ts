import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cartItem {
  id: number;
  quantity: number;
  price: number;
}

export interface cartState {
  selection: Record<number, cartItem>;
}

const initialState = {
  selection: {},
} as cartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initCart: (state) => {
      const cache = localStorage.getItem("cart");
      if (cache !== null) {
        state.selection = JSON.parse(cache);
      }
    },
    addToCart: (state, { payload }: PayloadAction<cartItem>) => {
      const item = state.selection[payload.id];
      if (item !== undefined) {
        state.selection[payload.id].quantity += payload.quantity;
      } else {
        state.selection[payload.id] = payload;
      }
      localStorage.setItem("cart", JSON.stringify(state.selection));
    },
    removeFromCart: (
      state,
      { payload }: PayloadAction<{ id: number | undefined }>
    ) => {
      if (payload.id === undefined) return;
      delete state.selection[payload.id];
      localStorage.setItem("cart", JSON.stringify(state.selection));
    },
    updateCartItem: (
      state,
      { payload }: PayloadAction<{ id: number | undefined; quantity: number }>
    ) => {
      if (
        payload.id === undefined ||
        state.selection[payload.id] === undefined
      ) {
        return;
      }
      if (payload.quantity === 0) {
        delete state.selection[payload.id];
      } else {
        state.selection[payload.id].quantity = payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.selection));
    },
    emptyCart: (state) => {
      state.selection = {};
      localStorage.setItem("cart", JSON.stringify(state.selection));
    },
  },
});

export const cartPriceSelector = (state: { cart: cartState }) => {
  var price = 0;
  Object.entries(state.cart.selection).forEach(([_id, item]) => {
    price += item.price * item.quantity;
  });
  return price;
};

export const cartPageSelector = (state: { cart: cartState }) => {
  return Object.values(state.cart.selection);
};

export const cartLengthSelector = (state: { cart: cartState }) => {
  if (state.cart === undefined) return 0;
  return Object.values(state.cart.selection).length;
};

export default cartSlice.reducer;

export const {
  addToCart,
  initCart,
  removeFromCart,
  updateCartItem,
  emptyCart,
} = cartSlice.actions;
