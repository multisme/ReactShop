import { combineReducers } from "@reduxjs/toolkit";

import ItemsSliceReducer from "features/items/itemsSlice";
import showcaseSliceReducer from "features/showcase/showcaseSlice"

const rootReducer = combineReducers({
  items: ItemsSliceReducer,
  showcase: showcaseSliceReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
