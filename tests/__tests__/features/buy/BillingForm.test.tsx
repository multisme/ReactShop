import ShippingForm from "features/buy/ShippingForm"
import {shallow} from "enzyme"

describe("ShippingForm", () =>{
        it("renders", () => {
                const component = shallow(<ShippingForm />);
                expect(component).toMatchSnapshot()
        })
})
