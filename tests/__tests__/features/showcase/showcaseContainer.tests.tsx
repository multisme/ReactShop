import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router} from 'react-router-dom';

import ShowcaseContainer from "features/showcase/showcaseContainer"

const mockStore = configureStore([]);

describe("showcaseContainer", () => {
        let store: any;
                  beforeEach(() => {
                          store = mockStore({
            })
        })

        it("render title on if selected is null", () => {
                        const mock = jest.spyOn(redux, 'useSelector');
                        mock.mockImplementation(() => ({ 
                                selected: null
                        }));
                        const component = mount(
                                <Router>
                                <Provider store={store}>
                                        <ShowcaseContainer/>
                                </Provider>
                                </Router>
                        );
                        const title = component.find('.header');
                        expect(title).toHaveLength(1);
                        expect(component).toMatchSnapshot();
        })
        it(" does render an item if selected is not null", () => {
                        const mock = jest.spyOn(redux, 'useSelector');
                        mock.mockImplementation(() => ({ 
                               selected : {id: 2, name: 3, quantity: 6, price: 8}
                        }));
                        const component = mount(
                                <Router>
                                <Provider store={store}>
                                        <ShowcaseContainer/>
                                </Provider>
                                </Router>
                        );
                        expect(component.find(".showcaseItem")).toHaveLength(1);
                        expect(component.find(".price")).toHaveLength(1);
                        expect(component.find(".name")).toHaveLength(1);
                        expect(component.find(".showcasePicture")).toHaveLength(1);
        })
})
