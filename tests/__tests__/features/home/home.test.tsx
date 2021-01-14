import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import * as redux from 'react-redux'
import { mount , shallow} from 'enzyme';
import { BrowserRouter as Router} from 'react-router-dom';

import Home from "features/home/home";

const mockStore = configureStore([]);
describe("home", () => {
        it("it renders home", ()=>{
                        const store = mockStore({
                                items:{
                                        hasError: false,
                                        loading: true,
                                        items: []
                                        },
                                showcase: {
                                        selected: null
                                        }

                                });
                        const component = mount(
                                <Router>
                                <Provider store={store}>
                                <Home />
                                </Provider>
                                </Router>
                        );
            })
})
