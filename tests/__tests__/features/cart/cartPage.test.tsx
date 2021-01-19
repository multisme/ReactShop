import * as react from "react";
import { Provider } from "react-redux";
import * as router from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import createMockStore from "redux-mock-store";
import { shallow, mount } from "enzyme";

import { updateCartItem, removeFromCart } from "features/cart/cartSlice";
import CartPage from "features/cart/cartPage";
describe("cartPage", () => {
  let store: any;
  const mockStore = createMockStore();

  beforeEach(() => {
    store = mockStore({
      items: {
        items: [
          {
            id: 3,
            price: 4,
            quantity: 8,
            name: "item1",
            url: "item1Picture",
          },
          {
            id: 2,
            price: 1,
            quantity: 15,
            name: "item2",
            url: "item2Picture",
          },
          {
            id: 5,
            price: 12,
            quantity: 9,
            name: "item3",
          },
        ],
      },
      cart: {
        selection: {
          3: {
            id: 3,
            price: 4,
            quantity: 4,
          },
          2: {
            id: 2,
            price: 1,
            quantity: 8,
          },
          5: {
            id: 5,
            price: 12,
            quantity: 4,
          },
        },
      },
    });
  });
  it("renders", () => {
    const component = mount(
      <Router>
        <Provider store={store}>
          <CartPage />
        </Provider>
      </Router>
    );
    expect(component).toMatchSnapshot();
    const cartItems = component.find(".cartItem");
    expect(cartItems).toHaveLength(3);
  });
  it("renders an empty cart", () => {
    store = mockStore({ cart: { selection: {} } });
    const component = mount(
      <Router>
        <Provider store={store}>
          <CartPage />
        </Provider>
      </Router>
    );
    const h3 = component.find("h3");
    expect(h3).toHaveLength(1);
    expect(h3.text()).toEqual(" cart is empty ");
  });
  it("renders loading if item is undefined", () => {
    store = mockStore({
      cart: {
        selection: {
          3: { id: 3, quantity: 4, price: 5 },
        },
      },
      items: { items: [] },
    });
    const component = mount(
      <Router>
        <Provider store={store}>
          <CartPage />
        </Provider>
      </Router>
    );
    const h3 = component.find("h3");
    expect(h3.text()).toEqual("Loading");
  });
  it("update cartItem on changes in the cart", () => {
    const component = mount(
      <Router>
        <Provider store={store}>
          <CartPage />
        </Provider>
      </Router>
    );
    const cartItem = component.find(".cartItem").at(0);
    const select = cartItem.find('select[name="quantity"]');

    select.simulate("change", {
      target: { name: "quantity", value: "3" },
      currentTarget: { name: "quantity", value: "3" },
    });
    //Still not working
    expect(select.props().value).toEqual("3");
  });
  it("remove the cart item on click", () => {
    store.dispatch = jest.fn();

    jest.mock("react-router-dom", () => ({
      ...(jest.requireActual("react-router-dom") as typeof router),
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));
    const component = mount(
      <Router>
        <Provider store={store}>
          <CartPage />
        </Provider>
      </Router>
    );
    const cartItem = component.find(".cartItem").at(0);
    const select = cartItem.find(".remove");
    select.simulate("click");
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(removeFromCart({ id: 2 }));
  });
});
