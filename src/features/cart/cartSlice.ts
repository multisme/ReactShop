import React from "react";
import {
        createSlice, PayloadAction
} from "@reduxjs/toolkit";

export interface cartItem{
        id: number;
        quantity: number;
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

export default cartSlice.reducer;

export const {
        addToCart,
        removeFromCart
} = cartSlice.actions
