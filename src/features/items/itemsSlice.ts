import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { itemData } from "features/item/itemSlice";

export interface itemListState {
  loading: boolean;
  hasError: boolean;
  items: itemData[];
}

const initialState = {
  loading: false,
  hasError: false,
  items: [],
} as itemListState;

const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    getItems: (state) => {
      state.loading = true;
    },
    getItemsSuccess: (state, { payload }: PayloadAction<itemData[]>) => {
      state.loading = false;
      state.items = payload;
      state.hasError = false;
    },
    getItemsFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

// The Actions
export const {
  getItems,
  getItemsSuccess,
  getItemsFailure,
} = ItemsSlice.actions;

export const itemsSelector = (state: { items: itemListState }) =>
  state.items;

export const itemPageSelector = createSelector(
        (state) => state.items.items,
        (_: any, id: string | undefined) => id,
        (items, id) => items.filter((item: itemData) => item.id == id)
)

//Thunk action TO fetch the Items
export const fetchItems = (): AppThunk => async (dispatch) => {
  dispatch(getItems());

  try {
    const response = await fetch("http://localhost:3000/items");

    const data = await response.json();
    dispatch(getItemsSuccess(data));
  } catch (error) {
    dispatch(getItemsFailure());
  }
};

//The reducer
export default ItemsSlice.reducer;
