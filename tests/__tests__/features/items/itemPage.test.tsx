import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import * as router from 'react-router-dom';
import {
        BrowserRouter as Router,
        MemoryRouter,
        Route
} from 'react-router-dom';

import ItemPage from "features/items/itemPage";
import * as cartSlice from "features/cart/cartSlice";
import addToCart from "features/cart/cartSlice";
import * as utils from "utils/utils";

const mockStore = configureStore([]);

describe("itemPage", () =>{
        let store: any;
        beforeEach(() => {
                store = mockStore({});
        })
        it("return error if there no item to show", () =>{ 
                const mock = jest.spyOn(redux, 'useSelector');
                mock.mockImplementation(() => ({ 
                        item: undefined
                }));
               const component = mount(
                <Router>
                      <Provider store={store}>
                             <ItemPage />
                      </Provider>
                </Router>
               );
               expect(component.find("h3").text()).toEqual("Error")
        })
        it("return the component if there is an item to show", () =>{ 
                const mock = jest.spyOn(redux, 'useSelector');
                const item = {id: 3, name: "pierre", quantity: 4, price: 3, details: "popo"}
                mock.mockImplementation(() => { 
                        return [item]
                });
               const component = mount(
                   <MemoryRouter initialEntries={['products/3']}>
                        <Route path='products/:id'>
                      <Provider store={store}>
                             <ItemPage />
                      </Provider>
                      </Route>
                </MemoryRouter>
               );
               expect(component.find('.name').text()).toEqual(item.name);
               expect(component.find('.price').text()).toEqual(String(item.price) + "€");
               expect(component.find('.details').text()).toEqual(item.details);
               expect(component.find('option').length).toEqual(item.quantity + 1);
        })
        it("check if alert to cart is called on click when quantity are zero", () =>{ 
                const mockSelector = jest.spyOn(redux, 'useSelector');
                const item = {id: 3, name: "pierre", quantity: 4, price: 3, details: "popo"}

                jest.spyOn(window, 'alert').mockImplementation(() => {});

                mockSelector.mockImplementation(() => { 
                        return [item]
                });
               const component = mount(
                   <MemoryRouter initialEntries={['products/3']}>
                        <Route path='products/:id'>
                      <Provider store={store}>
                             <ItemPage />
                      </Provider>
                      </Route>
                </MemoryRouter>
               );
               component.find('form').simulate("submit");
               expect(window.alert).toBeCalledWith("Please choose something before checkout")
        })
 
        it("check if add to cart is called on click and quantities are superior to 0", () =>{ 
                const mockSelector = jest.spyOn(redux, 'useSelector');
                const mockaddToCart = jest.spyOn(cartSlice, 'addToCart');
                const item = {id: 3, name: "pierre", quantity: 4, price: 3, details: "popo"}

                jest.spyOn(window, 'alert').mockImplementation(() => {});
                const mockForm = jest.spyOn(utils, 'useFormFields').mockReturnValue([
                       {
                               quantity: {
                                       content: 3
                               }
                       },
                       () => {}
                 ]
                )

                mockSelector.mockImplementation(() => { 
                        return [item]
                });
               const component = mount(
                   <MemoryRouter initialEntries={['products/3']}>
                        <Route path='products/:id'>
                      <Provider store={store}>
                             <ItemPage />
                      </Provider>
                      </Route>
                </MemoryRouter>
               );
               component.find('#quantity').simulate('change',  {
                       target: {
                               name: "quantity",
                               value: 3
                       },
                       currentTarget: {
                               value: 3
                       }
               })
               component.find('form').simulate("submit");
               expect(mockForm).toHaveBeenCalled()
               expect(mockaddToCart).toHaveBeenCalled()
        });
 })
