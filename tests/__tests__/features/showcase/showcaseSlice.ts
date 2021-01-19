import { Action } from "redux";

import createMockStore from "redux-mock-store";
import { itemData } from "features/item/itemSlice";
//import fetchMock from 'fetch-mock';

import reducer, {
  updateSelectedItem,
  removeSelectedItem,
} from "features/showcase/showcaseSlice";

describe("showcaseSlice", () => {
  describe("reducers", () => {
    let initialState: any;

    beforeEach(() => {
      initialState = {
        selected: null,
      };
    });

    it("checks if the initalState is correct", () => {
      const emptyAction: Action<string> = { type: "" };
      const state = reducer(undefined, emptyAction);
      expect(state).toEqual(initialState);
    });

    it("checks that the updateSelectedItem reducer works if selected is null", () => {
      const item: itemData = { id: 3, name: "choco", quantity: 4 };

      const state = reducer(initialState, updateSelectedItem(item));
      expect(state).toEqual({
        selected: item,
      });
    });

    it("checks that the updateSelectedItem reducer works if selected is not null", () => {
      const item: itemData = { id: 3, name: "choco", quantity: 4 };
      const item2: itemData = { id: 3, name: "bon", quantity: 4 };

      const initialState = {
        selected: item,
      };
      const state = reducer(initialState, updateSelectedItem(item2));
      expect(state).toEqual({
        selected: item2,
      });
    });

    it("checks that the removeSelectedItem reducer works if selected is not null", () => {
      const item: itemData = { id: 3, name: "choco", quantity: 4 };
      const initialState = {
        selected: item,
      };

      const state = reducer(initialState, removeSelectedItem);
      expect(state).toEqual({
        selected: null,
      });
    });

    it("checks that the removeSelectedItem reducer works if selected is not null", () => {
      const state = reducer(initialState, removeSelectedItem);
      expect(state).toEqual({
        selected: null,
      });
    });
  });
  describe("actions", () => {
    const item: itemData = { id: 3, name: "choco", quantity: 4 };
    const mockStore = createMockStore();
    it("insure that updateSelectedItem action is sent", () => {
      const store = mockStore();
      store.dispatch(updateSelectedItem(item));
      expect(store.getActions()).toEqual([updateSelectedItem(item)]);
    });
    it("insure that removeSelectedItem action is sent", () => {
      const store = mockStore();
      store.dispatch(removeSelectedItem());
      expect(store.getActions()).toEqual([removeSelectedItem()]);
    });
  });
});
