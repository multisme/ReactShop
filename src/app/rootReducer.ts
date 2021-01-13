import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "features/cart/cartSlice";

import ItemsSliceReducer from "features/items/itemsSlice";
import showcaseSliceReducer from "features/showcase/showcaseSlice";
import cartSliceReducer from "features/cart/cartSlice";

const rootReducer = combineReducers({
  items: ItemsSliceReducer,
  showcase: showcaseSliceReducer,
  cart: cartSliceReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
