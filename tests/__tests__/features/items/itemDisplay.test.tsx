import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import { mount, shallow } from 'enzyme';

import { ItemDisplay, ItemListDisplay } from "features/items/itemsDisplay";
import { itemData } from "features/item/itemSlice";
import {
        updateSelectedItem,
        removeSelectedItem
} from "features/showcase/showcaseSlice";

const mockStore = configureStore();


describe('itemDisplay', () => {
        let store: any;
        let component: any;

const useDispatchMock = useDispatch as jest.Mock;
                const item: itemData = {id: 3, name: "pierre", quantity: 4};

 
        beforeEach(() => {
                        store = mockStore({ 
                });

                store.dispatch = jest.fn();

                component = mount(
                        <Router>
                        <Provider store={store}>
                                <ItemDisplay item={item} />
                        </Provider>
                        </Router>
                );
        });

        it("component is rendered", () => {
                expect(component).toMatchSnapshot();
        })
        
        it("component dispatch event on hover", () => {
                component.find('li.itemCard').simulate('mouseenter');
                expect(store.dispatch).toHaveBeenCalledTimes(1);
                expect(store.dispatch).toHaveBeenCalledWith(
                        updateSelectedItem(item)
                );
                component.find('li.itemCard').simulate('mouseleave');
                expect(store.dispatch).toHaveBeenCalledTimes(2);
                expect(store.dispatch).toHaveBeenCalledWith(
                        removeSelectedItem()
                );

        })
}) 

describe('ItemListDisplay', () => {
        //Check correct type
        let store: any;
 
        beforeEach(() => {
                store = mockStore({
        });
        });

        it("component is rendered with an empty array", () => {
                const items: itemData[] = [];
                const component= mount(
                        <Router>
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                        </Router>
                )
                expect(component).toMatchSnapshot();
        });
        it("component is rendered with array of one", () => {
                const items: itemData[] = [
                        {id: 3, "name": "testname", "quantity": 4},
                ];
                const component= mount(
                        <Router>
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                        </Router>
                )
                expect(component).toMatchSnapshot();
        });
        it("component is rendered with array of some", () => {
                const items: itemData[] = [
                        {id: 3, "name": "testname", "quantity": 4},
                        {id: 4, "name": "postname", "quantity": 8}
                ];
                const component= mount(
                        <Router>
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                        </Router>
                );
                expect(component).toMatchSnapshot();
        })
})
