import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';

import { ItemDisplay, ItemListDisplay } from "features/items/itemsDisplay";
import { itemData } from "features/item/itemSlice";
import { updateSelectedItem } from "features/showcase/showcaseSlice";

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
                        <Provider store={store}>
                                <ItemDisplay item={item} />
                        </Provider>
                );
        });

        it("component is rendered", () => {
                expect(component).toMatchSnapshot();
        })
        
        it("component dispatch event on click", () => {
                component.find('li.item').simulate('click');
                expect(store.dispatch).toHaveBeenCalledTimes(1);
                expect(store.dispatch).toHaveBeenCalledWith(
                        updateSelectedItem(item)
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
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                )
                expect(component).toMatchSnapshot();
        });
        it("component is rendered with array of one", () => {
                const items: itemData[] = [
                        {id: 3, "name": "testname", "quantity": 4},
                ];
                const component= mount(
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                )
                expect(component).toMatchSnapshot();
        });
        it("component is rendered with array of some", () => {
                const items: itemData[] = [
                        {id: 3, "name": "testname", "quantity": 4},
                        {id: 4, "name": "postname", "quantity": 8}
                ];
                const component= mount(
                        <Provider store={store}>
                        <ItemListDisplay items={items}/>
                        </Provider>
                );
                expect(component).toMatchSnapshot();
        })
})
