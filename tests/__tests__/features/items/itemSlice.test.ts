import { Action } from "redux";

import createMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk, { ThunkDispatch } from "redux-thunk";
import { useSelector } from "react-redux";
//import fetchMock from 'fetch-mock';

import reducer, {
  fetchItems,
  getItems,
  getItemsFailure,
  getItemsSuccess,
  itemsSelector,
  itemPageSelector,
  itemListState,
} from "features/items/itemsSlice";

describe("itemSlice", () => {
  describe("reducers", () => {
    const initialState = { loading: false, hasError: false, items: [] };

    it("checks if the initalState is correct", () => {
      const emptyAction: Action<string> = { type: "" };
      const state = reducer(undefined, emptyAction);
      expect(state).toEqual(initialState);
    });
    it("sets loading true when fetchItems is pending", () => {
      const state = reducer(initialState, getItems);
      expect(state).toEqual({ loading: true, hasError: false, items: [] });
    });

    it("sets the list  when fetchItems is fulfilled", () => {
      const action = {
        type: [getItemsSuccess],
        payload: [{ id: 1, name: "roro", quantity: 3 }],
      };
      const state = reducer(initialState, action);
      //check if the type is verified somewhere else (the function works with a missing field")
      expect(state).toEqual({
        loading: false,
        hasError: false,
        items: [{ id: 1, name: "roro", quantity: 3 }],
      });
    });

    it("sets loading false when fetchItems is rejected", () => {
      const state = reducer(initialState, getItemsFailure);
      expect(state).toEqual({ loading: false, hasError: true, items: [] });
    });
  });

  describe("selectors", () => {
    it("returns an empty array when ther are no items on itemsSelector", () => {
      const initialState = {
        loading: false,
        hasError: false,
        items: [],
      } as itemListState;
      const items = itemsSelector({ items: initialState });
      expect(items).toEqual(initialState);
    });

    it("returns an empty array when there are a lot of items on itemsSelector", () => {
      const initialState = {
        loading: false,
        hasError: false,
        items: [{ id: 1, name: "toto", quantity: 3 }],
      };
      const items = itemsSelector({ items: initialState });
      expect(items).toEqual(initialState);
    });

    it("returns an empty array when ther are no items corresponding on itemPageSelector", () => {
     let state1 = {
        loading: false,
        hasError: false,
        items: [],
      } as itemListState;
      const items1 = itemPageSelector({ items: state1}, "2");
      expect(items1).toEqual([]);
 
      let state2 = {
        loading: false,
        hasError: false,
        items: [
                {id:3, name: "polo", quantity: 4, price: 6}
        ],
      } as itemListState;
      const items2 = itemPageSelector({ items: state2}, "2");
      expect(items2).toEqual([]);
    });
    });

  describe("async actions", () => {
    const middlewares = [thunk];
    const mockStore = createMockStore(middlewares);

    afterEach(() => {
      fetchMock.restore();
    });
    it("fetch items and return them on success by dispatching the correct actions", () => {
      const payload = [{ id: 1, name: "testname", quantity: 3 }];
      fetchMock.getOnce("http://localhost:3000/items", {
        body: payload,
      });
      const store = mockStore();
      //setup correct tests
      return store.dispatch<any>(fetchItems()).then(() => {
        expect(store.getActions()).toEqual([
          getItems(),
          getItemsSuccess(payload),
        ]);
      });
    });
    it("fetch items and return an error if there is one by dispatching the correct actions", () => {
      const payload = [{ id: 1, name: "testname", quantity: 3 }];
      fetchMock.getOnce("http://localhost:3000/items", {
        throws: Error,
      });
      const store = mockStore();
      //setup correct tests
      return store.dispatch<any>(fetchItems()).then(() => {
        expect(store.getActions()).toEqual([getItems(), getItemsFailure()]);
      });
    });
  });
});
