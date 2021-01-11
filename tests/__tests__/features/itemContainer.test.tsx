import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import thunk, { ThunkDispatch } from "redux-thunk";
import { mount, shallow } from 'enzyme';

import { ItemsContainer } from "features/items/itemsContainer";
import { ItemListDisplay } from "features/items/itemsDisplay";
import { fetchItems } from "features/items/itemsSlice";

const mockStore = configureStore([thunk]);

/*
jest.mock('features/items/itemsSlice', () => {
        fetchItems: jest.fn(),
        itemsSelector: jest.fn()
});
*/


jest.mock('react-redux', () => {
        const { Provider } = jest.requireActual("react-redux");
        return {
        useSelector: () => ({
                                hasError: false,
                                items: [],
                                loading: false
       }),
       useDispatch: jest.fn(()=>{}),
       Provider
       }
});

describe('itemsContainer', () => {
        let store: any
        beforeEach(() => {
                 // useSelectorMock.mockClear()
                 // useDispatchMock.mockClear()
                });
                const dispatch = jest.fn();
            //    useDispatch.mockReturnValue(jest.fn());

                it("correct component rendered on instanciation", () => {
                store = mockStore({
                        items: {
                                hasError: false,
                                items: [],
                                loading: false
                     }
                });
/*
                        store.dispatch = jest.fn();
                        const component = mount(
                                <redux.Provider store={store}>
                                        <ItemsContainer />
                                </redux.Provider>
                        );
                        expect(store.dispatch).toHaveBeenCalledTimes(1);
              //          expect(store.dispatch).toHaveBeenCalledWith(
              //                  fetchItems        
             //           );
                        const h3 = component.find('h3');
                        expect(h3.length).toEqual(1);
                        expect(h3.text()).toEqual('Loading...')
                })
                it("correct component rendered on fetchList error", () => {
                        const component = mount(
                                <Provider store={store}>
                                        <ItemsContainer />
                                </Provider>
                        );
                        expect(component).toMatchSnapshot();
                })

                it("correct component rendered on fetchList success", () =>
                {
                        const component = mount(
                                <Provider store={store}>
                                        <ItemsContainer />
                                </Provider>
                        );
                        expect(component).toMatchSnapshot();
                })
                */
})
