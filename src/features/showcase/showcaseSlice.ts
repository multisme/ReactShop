import { createSlice } from '@reduxjs/toolkit';
import {itemData} from 'features/item/itemSlice';

export interface showcaseInterface{
        selected: itemData | null
}

export const initialState = {
        selected: null
} as showcaseInterface;

const showcaseSlice = createSlice({
        name: "showcase",
        initialState,
        reducers: {
                updateSelectedItem: (state, { payload }) => {
                        state.selected = payload;
                }
        }
});

export default showcaseSlice.reducer;

export const { updateSelectedItem } = showcaseSlice.actions
