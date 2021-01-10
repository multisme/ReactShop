import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import rootReducer, { RootState } from "app/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

/* istanbul ignore next */
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    import("./rootReducer").then((newModule) => {
      const newRootReducer = newModule.default;
      store.replaceReducer(newRootReducer);
    });
  });
}

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
