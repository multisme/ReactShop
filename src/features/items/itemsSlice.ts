import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { itemData } from "features/items/item";

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
    getItems: state => {
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

export const itemsSelector = (state: {items: itemListState}) => state.items;

//Thunk action TO fetch the Items
export const fetchItems = (): AppThunk => async (dispatch) => {
  dispatch(getItems());

  try {
    const response = await fetch("http://localhost:3000/items");

    const data = await response.json();
    console.log("response", response)
    dispatch(getItemsSuccess(data));
  } catch (error) {
    dispatch(getItemsFailure());
  }
};

//The reducer
export default ItemsSlice.reducer;
