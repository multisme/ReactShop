import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import * as redux from "react-redux";
import { mount, shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";

import App from "app/app";
import { fetchItems } from "features/items/itemsSlice";
import * as itemSlice from "features/items/itemsSlice";

const mockStore = configureStore([thunk]);
describe("app", () => {
  it("it fetchs items on start", () => {
    const mock = jest.spyOn(itemSlice, "fetchItems");
    const store = mockStore({
      items: {
        hasError: false,
        loading: true,
        items: [],
      },
      showcase: {
        selected: null,
      },
    });
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(mock).toHaveBeenCalled();
  });
});
