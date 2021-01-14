import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router} from 'react-router-dom';

import { ItemsContainer } from "features/items/itemsContainer";
import { ItemListDisplay } from "features/items/itemsDisplay";

import {
        getItems,
        getItemsSuccess,
        getItemsFailure
 } from "features/items/itemsSlice";

const mockStore = configureStore([]);

describe('itemsContainer', () => {
        let store: any;
        const dispatch = jest.fn();
                  beforeEach(() => {
                          store = mockStore({
                  })
                })

                it("correct component rendered on instanciation", () => {
                        const mock = jest.spyOn(redux, 'useSelector');
                        mock.mockImplementation(() => ({ 
                                loading: true,
                                hasError: false,
                                items: []
                        }))

                        const component = mount(
                                <Provider store={store}>
                                        <ItemsContainer />
                                </Provider>
                        );
                        const h3 = component.find('h3');
                        expect(h3.length).toEqual(1);
                        expect(component).toMatchSnapshot();
                        expect(h3.text()).toEqual('Loading...')
                })
                it("correct component rendered on hasError", () => {
                        const mock = jest.spyOn(redux, 'useSelector');
                        mock.mockImplementation(() => ({ 
                                loading: false,
                                hasError: true,
                                items: []
                        }))

                        const component = mount(
                                <redux.Provider store={store}>
                                        <ItemsContainer />
                                </redux.Provider>
                        );
                        const h1 = component.find('h1');
                        const h3 = component.find('h3');
                        expect(h1.length).toEqual(1);
                        expect(h3.length).toEqual(1);
                        expect(component).toMatchSnapshot();
                        expect(h1.text()).toEqual('Something went wrong with the database')
                        expect(h3.text()).toEqual('Is the developper payed well enough?')
                })
                it("correct component rendered", () => {
                        const mock = jest.spyOn(redux, 'useSelector');
                        mock.mockImplementation(() => ({ 
                                loading: false,
                                hasError: false,
                                items: [
                                {id: 3, name: "dede", quantity: 4, price: 5},
                                {id: 6, name: "dodo", quantity: 2, price: 8}
                                ]
                        }))

                        const component = mount(
                                <Router>
                                <redux.Provider store={store}>
                                        <ItemsContainer />
                                </redux.Provider>
                                </Router>
                        );
                        expect(component.find('.itemCard')).toHaveLength(2);
                })
})
