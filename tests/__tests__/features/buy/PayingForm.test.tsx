import PayingForm from "features/buy/PayingForm";
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from "react-router-dom";
import * as redux from "react-redux";
import { Provider } from "react-redux";
import { mount } from "enzyme";

const mockStore = configureStore();

describe("PayingFrom", () => {
                let store: any;

                beforeEach(() => {
                        store = mockStore({ });
                        const mock = jest.spyOn(redux, 'useSelector');
                        mock.mockReturnValue(0)
                })
        it("renders", () => {

                const component = mount(
                <Router>
                        <Provider store={store}>
                                <PayingForm />
                        </Provider>
                </Router>
                );
                expect(component).toMatchSnapshot();
        })
})
