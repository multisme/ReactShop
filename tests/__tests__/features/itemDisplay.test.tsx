import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import { ItemListDisplay } from "features/items/itemsDisplay";
import { itemData } from "features/item/itemSlice";

const mockStore = configureStore();

describe('itemDisplay', () => {
        let store: any;
 
        beforeEach(() => {
                store = mockStore({
                myState: 'sample text',
        });
        });

        it("gets an empty array", () => {
                const items: itemData[] = [];
                const component= renderer.create(
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                ).toJSON();
                expect(component).toMatchSnapshot();
}) 

describe('ItemListDisplay', () => {
        //Check correct type
        let store: any;
 
        beforeEach(() => {
                store = mockStore({
                myState: 'sample text',
        });
        });

        it("gets an empty array", () => {
                const items: itemData[] = [];
                const component= renderer.create(
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                ).toJSON();
                expect(component).toMatchSnapshot();
        });
        it("gets array of one", () => {
                const items: itemData[] = [
                        {"id": 3, "name": "testname", "quantity": 4},
                ];
                const component= renderer.create(
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                ).toJSON();
                expect(component).toMatchSnapshot();
        });
        it("gets array of some", () => {
                const items: itemData[] = [
                        {"id": 3, "name": "testname", "quantity": 4},
                        {"id": 4, "name": "postname", "quantity": 8}
                ];
                const component= renderer.create(
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                ).toJSON();
                expect(component).toMatchSnapshot();
        })
})
