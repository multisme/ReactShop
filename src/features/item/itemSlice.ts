import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";

export interface itemData {
  id: number | undefined;
  quantity: number;
  name: string;
  price?: number
  details?: 
}

export const initialState = {
  id: undefined,
  quantity: 0,
  name: "unknown",
} as itemData;

const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
});
