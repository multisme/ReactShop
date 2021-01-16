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
        selection: []
} as cartState

const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers: {
                addToCart: (state, { new_item }: PayloadAction<cartItem> ) => {
                        const item = state.selection[new_item.id]
                        if (item !== undefined){
                              state.selection[new_item.id].quantity += new_item.id
                               
                        } else {
                                state.selection[new_item.id] = new_item; 
                        }
                },
                removeFromCart: (state, { item_to_remove }: PayloadAction<cartItem>) => {
                        delete state.selection[item_to_remove.id]
                }
        }
})

export const cartSelector = (state: {cart: cartState}) => {
        var price = 0;
        Object.entries(state.cart.selection).forEach(([_id, item]) => {
                price += item.price * item.quantity
        })
        return price;
}

export default cartSlice.reducer;

export const {
        addToCart,
        removeFromCart
} = cartSlice.actions
