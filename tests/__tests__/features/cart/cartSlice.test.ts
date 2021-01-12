import {Action} from "redux"

import {BrowserRouter as Router} from "react-router-dom";
import createMockStore from "redux-mock-store";

import reducer, {
        addToCart,
        cartItem,
        cartState,
        removeFromCart
} from "features/cart/cartSlice";

describe("cartSlice", () => {
        describe("reducers", () => {
                let initialSate: cartState;
                beforeEach(()=>{
                initialSate = {
                        selection: []
                } as cartState
                })

                        const item: cartItem = {
                                id: 3,
                                name: "test item",
                                quantity: 3,
                                price: 3
                        }
                it("checks if the initialSate is correct", () => {
                        const emptyAction : Action<string> = {type: ""};
                        const state = reducer(undefined, emptyAction);
                        expect(state).toEqual(initialSate);
                })
                it("checks if it adds to cart if cart is empty", () => {
                        const state = reducer(initialSate, addToCart(item));
                        expect(state.selection).toContain(item)
                })
                it("checks if it adds to cart when cart is not empty", () => {
                        initialSate.selection.push(item)
                        const item2: cartItem = {
                                id: 4,
                                name: "test item",
                                quantity: 3,
                                price: 3
                        }
                        const state = reducer(initialSate, addToCart(item2));
                        expect(state.selection).toContain(item)
                        expect(state.selection).toContain(item2)
                })
                it("checks if it removes from cart when cart is empty", () => {
                        const state = reducer(initialSate, removeFromCart(item));
                        expect(state).toEqual(initialSate);
                });
                it("checks if it removes from cart when cart is not empty", () => {
                        const newState: cartState = {
                                selection: [item]
                        }
                        const state = reducer(initialSate, removeFromCart(item));
                        expect(state).toEqual(initialSate);
                })
        })
        describe("action", () => {
                const item: cartItem = {id:3 , name: "choco", quantity: 4,price: 3}
                const mockStore = createMockStore();
                it ("insure that addtocart action is sent", () => {
                        const store = mockStore();
                        store.dispatch(
                                addToCart(item)
                        )
                        expect(store.getActions()).toEqual(
                                [addToCart(item)]
                        )
                });
                it("insure that removeFromCart action is sent", () => {
                        const store = mockStore();
                        store.dispatch(
                               removeFromCart(item)
                        )
                        expect(store.getActions()).toEqual(
                                [removeFromCart(item)]
                        )
                })
        })
})

