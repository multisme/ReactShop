import {
        createSlice,
        PayloadAction
} from "@reduxjs/toolkit";

export interface cartItem{
        id: number;
        quantity: number;
        price: number;
}

export interface cartState {
        selection: Record<number, cartItem>;
};

const initialState = {
        selection: {}
} as cartState

const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers: {
                addToCart: (state, { payload }: PayloadAction<cartItem> ) => {
                        const item = state.selection[payload.id]
                        if (item !== undefined){
                              state.selection[payload.id].quantity += payload.quantity
                               
                        } else {
                                state.selection[payload.id] = payload; 
                        }
                },
                removeFromCart: (state, { payload }: PayloadAction<cartItem>) => {
                        delete state.selection[payload.id]
                }
        }
})

export const cartPriceSelector = (state: {cart: cartState}) => {
        var price = 0;
        Object.entries(state.cart.selection).forEach(([_id, item]) => {
                price += item.price * item.quantity
        })
        return price;
}

export const cartPageSelector = (state: {cart: cartState}) => {
        return Object.values(state.cart.selection)
}

export default cartSlice.reducer;

export const {
        addToCart,
        removeFromCart
} = cartSlice.actions
