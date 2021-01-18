import { shallow, mount } from "enzyme";
import * as redux from "react-redux";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";

import ThankForm from "features/buy/ThankForm";
import { emptyCart } from "features/cart/cartSlice";

describe("ThankForm", () => {
  let store: any;
  const mockStore = createMockStore();

  beforeEach(() => {
    store = mockStore();
  });

  it("renders", () => {
    const component = shallow(
      <Provider store={store}>
        <ThankForm />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
  it("dispatch an emptyCart event", () => {
    store.dispatch = jest.fn();
    const _component = mount(
      <Provider store={store}>
        <ThankForm />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(emptyCart);
  });
});
