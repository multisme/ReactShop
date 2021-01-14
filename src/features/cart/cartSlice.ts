import React from "react";
import {
        createSelector,
        createSlice,
        PayloadAction
} from "@reduxjs/toolkit";

export interface cartItem{
        id: number;
        quantity: number;
        price: number;
}

export interface cartState {
        selection: cartItem[];
};

const initialState = {
        selection: []
} as cartState

const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers: {
                addToCart: (state, { payload }: PayloadAction<cartItem> ) => {
                                state.selection.push(payload) 
                },
                removeFromCart: (state, { payload }: PayloadAction<cartItem>) => {
                        state.selection = state.selection.filter(
                                item => item.id != payload.id
                        )
                }
        }
})

export const cartSelector = (state: {cart: cartState}) => {
        var price = 0;
        state.cart.selection.forEach(item => {
                price += item.price * item.quantity;
        });
        if (isNaN(price)){
                price = 0;
        }
        return price;
}

export default cartSlice.reducer;

export const {
        addToCart,
        removeFromCart
} = cartSlice.actions
