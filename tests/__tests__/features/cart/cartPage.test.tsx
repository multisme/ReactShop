import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { shallow, mount } from "enzyme";

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
            name: "item1",
            url: "item1Picture",
          },
          2: {
            id: 2,
            price: 1,
            quantity: 8,
            name: "item2",
            url: "item2Picture",
          },
          5: {
            id: 5,
            price: 12,
            quantity: 4,
            name: "item3",
            url: "item3Picture",
          },
        },
      },
    });
  });
  it("renders", () => {
    const component = mount(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );
    expect(component).toMatchSnapshot();
    const cartItems = component.find(".cartItem");
    expect(cartItems).toHaveLength(3);
  });
  it("renders an empty cart", () => {
    store = mockStore({ cart: { selection: {} } });
    const component = mount(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );
    const h3 = component.find("h3");
    expect(h3).toHaveLength(1);
    expect(h3.text()).toEqual(" cart is empty ");
  });
  it("update cartItem on changes in the cart", () => {
    const component = mount(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );
    const cartItem = component.find(".cartItem").at(0);
    const select = cartItem.find('select[name="quantity"]');
    select.simulate("change", { target: { value: 3 } });
    expect(cartItem.find('select[name="quantity"]').prop("value")).toBe(3);
    const price = cartItem.find(".price").at(0);
    expect(price.text()).toEqual("3");
  });
});
