import { Action } from "redux";
//import fetchMock from 'fetch-mock';

import reducer, {
        fetchItems,
        getItems,
        getItemsFailure,
        getItemsSuccess,
} from 'features/items/itemsSlice'

describe('itemSlice', () => {
        describe('reducers', () => {
                const initialState = { loading: false, hasError: false, items: [] }

                it('checks if the initalState is correct', () => {
                        const emptyAction: Action<string> = {type: ""};
                        const state = reducer(undefined, emptyAction);
                        expect(state).toEqual(initialState);
                });
                it('sets loading true when fetchItems is pending', () => {
                        const state = reducer(initialState, getItems);
                        expect(state).toEqual({ loading: true , hasError: false, items: [] });
                });

                it('sets the list  when fetchItems is fulfilled', () => {
                        const action = { type: [getItemsSuccess], payload: [{id: 1, name: "roro", quantity: 3}] };
                        const state = reducer(initialState, action);
                        //check if the type is verified somewhere else (the function works with a missing field")
                        expect(state).toEqual({  loading: false , hasError: false, items: [{id: 1, name: "roro", quantity: 3}]});
                });

                it('sets loading false when fetchItems is rejected', () => {
                        const state = reducer(initialState, getItemsFailure);
                        expect(state).toEqual({  loading: false , hasError: true, items: []});
                });

        })
        describe('actions', () => {
                /*
                const middlewares = [thunk]
                const mockStore = configureMockStore(middlewares)

                describe('async actions', () => {
                        afterEach(() => {
                                fetchMock.restore()
                        })
                        it('fetch items', () =>
                           fetchMock.getOnce('http://localhost:3000/items', {
                                   body: [{id: 1, name: "testname", "quantity": 3}]
                           })
                           const store = mockStore({ todos: [] })
                           return store.dispatch(actions.fetchTodos()).then(() => {
                                   // return of async actions
                                   expect(store.getActions()).toEqual(expectedActions)
                           })
                })
                */
        })
})

