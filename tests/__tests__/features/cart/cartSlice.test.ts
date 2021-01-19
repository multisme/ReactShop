import { Action } from "redux";

import { BrowserRouter as Router } from "react-router-dom";
import createMockStore from "redux-mock-store";

import reducer, {
  addToCart,
  cartItem,
  cartLengthSelector,
  cartPriceSelector,
  cartPageSelector,
  cartState,
  emptyCart,
  initCart,
  removeFromCart,
  updateCartItem,
} from "features/cart/cartSlice";
import { networkInterfaces } from "os";

describe("cartSlice", () => {
  describe("reducers", () => {
    let initialState: cartState;
    beforeEach(() => {
      initialState = {
        selection: {},
      } as cartState;
    });

    const item: cartItem = {
      id: 3,
      quantity: 3,
      price: 3,
    };
    it("checks if the initialState is correct", () => {
      const emptyAction: Action<string> = { type: "" };
      const state = reducer(undefined, emptyAction);
      expect(state).toEqual(initialState);
    });
    it("checks that the cart is correctly initialised given the locals Storage", () => {
      const newState = { selection: { [item.id]: item } };
      const state1 = reducer(initialState, initCart);
      expect(state1).toEqual(initialState);

      localStorage.setItem("cart", JSON.stringify({ [item.id]: item }));
      const state2 = reducer(initialState, initCart);
      expect(state2).toEqual(newState);
    });
    it("checks if it adds to cart if cart is empty", () => {
      const state = reducer(initialState, addToCart(item));
      expect(state.selection).toMatchObject({ [item.id]: item });
    });
    it("checks if it adds to cart when cart is not empty", () => {
      initialState.selection[item.id] = item;
      const item2: cartItem = {
        id: 4,
        quantity: 3,
        price: 3,
      };
      const state = reducer(initialState, addToCart(item2));
      expect(state.selection).toMatchObject({ [item.id]: item });
      expect(state.selection).toMatchObject({ [item2.id]: item2 });
    });
    it("checks if it removes from cart when cart is empty", () => {
      const state = reducer(initialState, removeFromCart(item));
      expect(state).toEqual(initialState);
    });
    it("checks that if the item exist, the quantity are added", () => {
      initialState.selection[item.id] = item;
      const state = reducer(initialState, addToCart(item));
      expect(state.selection[item.id].quantity).toEqual(
        item.quantity + item.quantity
      );
    });
    it("checks that removeFromCart does nothing if the item is not in the cart", () => {
      const state = reducer(initialState, removeFromCart({ id: undefined }));
      expect(state).toEqual(initialState);
    });
    it("checks if it removes from cart when cart is not empty", () => {
      const newState: cartState = {
        selection: { 3: item },
      };
      const state = reducer(newState, removeFromCart(item));
      expect(state).toEqual(initialState);
    });
    it("checks if the cart item stay the same when the item is not in the cart", () => {
      const state = reducer(
        initialState,
        updateCartItem({ id: item.id, quantity: 6 })
      );
      expect(state).toEqual(initialState);
    });
    it("checks if the cart item is updated when the cart item is in the cart", () => {
      initialState.selection[item.id] = item;
      const state = reducer(
        initialState,
        updateCartItem({ id: item.id, quantity: 6 })
      );
      expect(state.selection[item.id].quantity).toEqual(6);
    });
    it("checks if the cart item is removed when the quantity is update to 0", () => {
      initialState.selection[item.id] = item;
      const newState: cartState = { selection: {} };
      const state = reducer(
        initialState,
        updateCartItem({ id: item.id, quantity: 0 })
      );
      expect(state).toEqual(newState);
    });
    it("checks that the cart is empty", () => {
      const newState: cartState = {
        selection: { [item.id]: item },
      };
      const state = reducer(newState, emptyCart());
      expect(state).toEqual(initialState);
    });
  });

  describe("action", () => {
    const item: cartItem = {
      id: 3,
      quantity: 4,
      price: 3,
    };
    const mockStore = createMockStore();
    it("insure that addtocart action is sent", () => {
      const store = mockStore();
      store.dispatch(addToCart(item));
      expect(store.getActions()).toEqual([addToCart(item)]);
    });
    it("insure that removeFromCart action is sent", () => {
      const store = mockStore();
      store.dispatch(removeFromCart({ id: item.id }));
      expect(store.getActions()).toEqual([removeFromCart({ id: item.id })]);
    });
    it("insure that updateCart action is sent", () => {
      const store = mockStore();
      store.dispatch(updateCartItem({ id: item.id, quantity: 5 }));
      expect(store.getActions()).toEqual([
        updateCartItem({ id: item.id, quantity: 5 }),
      ]);
    });
    it("insure that emptyCart action is sent", () => {
      const store = mockStore();
      store.dispatch(emptyCart());
      expect(store.getActions()).toEqual([emptyCart()]);
    });
  });

  describe("selector", () => {
    let initialState: cartState;
    beforeEach(() => {
      initialState = {
        selection: {
          1: { id: 1, quantity: 4, price: 3 },
          2: { id: 2, quantity: 2, price: 8 },
          3: { id: 3, quantity: 1, price: 2 },
          4: { id: 4, quantity: 3, price: 6 },
          5: { id: 5, quantity: 0, price: 7 },
        },
      };
    });
    it("returns a null price on an empty aray", () => {
      initialState = {
        selection: {},
      };
      expect(cartPriceSelector({ cart: initialState })).toEqual(0);
    });
    it("returns the correct price on an array", () => {
      expect(cartPriceSelector({ cart: initialState })).toEqual(48);
    });
    it("returns a cart of items if there are none", () => {
      const cart = [
        { id: 1, quantity: 4, price: 3 },
        { id: 2, quantity: 2, price: 8 },
        { id: 3, quantity: 1, price: 2 },
        { id: 4, quantity: 3, price: 6 },
        { id: 5, quantity: 0, price: 7 },
      ];
      expect(cartPageSelector({ cart: initialState })).toEqual(cart);
    });
    it("returns an empty cart is there are none selected", () => {
      initialState = {
        selection: {},
      };
      expect(cartPageSelector({ cart: initialState })).toEqual([]);
    });
    it("returns a length a 0 if the cart is empty", () => {
      initialState = {
        selection: {},
      };
      expect(cartLengthSelector({ cart: initialState })).toEqual(0);
    });
    it("returns a length a 0 if the cart is not empty", () => {
      expect(cartLengthSelector({ cart: initialState })).toEqual(5);
    });
  });
});
