import {Action} from "redux"

import {BrowserRouter as Router} from "react-router-dom";
import createMockStore from "redux-mock-store";

import reducer, {
        addToCart,
        cartItem,
        cartPriceSelector,
        cartPageSelector,
        cartState,
        removeFromCart
} from "features/cart/cartSlice";

describe("cartSlice", () => {
        describe("reducers", () => {
                let initialSate: cartState;
                beforeEach(()=>{
                initialSate = {
                        selection: {}
                } as cartState
                })

                        const item: cartItem = {
                                id: 3,
                                quantity: 3,
                                price: 3,
                                url: "well",
                                name: "testitem"
                        }
                it("checks if the initialSate is correct", () => {
                        const emptyAction : Action<string> = {type: ""};
                        const state = reducer(undefined, emptyAction);
                        expect(state).toEqual(initialSate);
                })
                it("checks if it adds to cart if cart is empty", () => {
                        const state = reducer(initialSate, addToCart(item));
                        expect(state.selection).toMatchObject({[item.id] : item})
                })
                it("checks if it adds to cart when cart is not empty", () => {
                        initialSate.selection[item.id] = item
                        const item2: cartItem = {
                                id: 4,
                                quantity: 3,
                                price: 3,
                                url: "well",
                                name: "testitem"
                        }
                        const state = reducer(initialSate, addToCart(item2));
                        expect(state.selection).toMatchObject({[item.id] : item})
                        expect(state.selection).toMatchObject({[item2.id] : item2})
                })
                it("checks if it removes from cart when cart is empty", () => {
                        const state = reducer(initialSate, removeFromCart(item));
                        expect(state).toEqual(initialSate);
                });
                it("checks that if the item exist, the quantity are added", ()=>{
                        initialSate.selection[item.id] = item
                        const state = reducer(initialSate, addToCart(item));
                        expect(state.selection[item.id].quantity).toEqual(item.quantity + item.quantity)
                })
                it("checks if it removes from cart when cart is not empty", () => {
                        const newState: cartState = {
                                selection: { 3: item}
                        }
                        const state = reducer(newState, removeFromCart(item));
                        expect(state).toEqual(initialSate);
                })
        })
        describe("action", () => {
                const item: cartItem = {
                        id:3,
                        quantity: 4,
                        price: 3,
                                url: "well",
                                name: "testitem"
                }
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

        describe("selector", () => {
               let initialState: cartState;
               beforeEach(() => {
                        initialState = {
                               selection: {
                                1: {id:1,quantity: 4,price: 3, url:"urlitem1", name:"item1"},
                                2: {id:2,quantity: 2,price: 8, url:"urlitem1", name:"item1"},
                                3: {id:3,quantity: 1,price: 2, url:"urlitem1", name:"item1"},
                                4: {id:4,quantity: 3,price: 6, url:"urlitem1", name:"item1"},
                                5: {id:5,quantity: 0,price: 7, url:"urlitem1", name:"item1"}
                               }
                       }
                              
               })
               it("returns nothing on an empty aray", () => {
                       initialState = {
                               selection: {}
                       }
                        expect(cartPriceSelector({cart: initialState})).toEqual(0)
               })
               it("returns the correct price on an array", () =>{
                        expect(cartPriceSelector({cart: initialState})).toEqual(48)
               })
               it("returns a cart of items if there are none", () => {
                       const cart = [
                                {id:1,quantity: 4,price: 3, url:"urlitem1", name:"item1"},
                                {id:2,quantity: 2,price: 8, url:"urlitem1", name:"item1"},
                                {id:3,quantity: 1,price: 2, url:"urlitem1", name:"item1"},
                                {id:4,quantity: 3,price: 6, url:"urlitem1", name:"item1"},
                                {id:5,quantity: 0,price: 7, url:"urlitem1", name:"item1"}
                       ]
                       expect(cartPageSelector({cart: initialState})).toEqual(cart)

                       })
               it("returns an empty cart is there are none selected", () => {
                       initialState = {
                               selection: {}
                       }
                       expect(cartPageSelector({cart: initialState})).toEqual([])
               })
               })
 })

