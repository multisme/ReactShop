import BillingForm from "features/buy/BillingForm"
import {shallow} from "enzyme"

describe("BillingForm", () =>{
        it("rendets", () => {
                const component = shallow(<BillingForm />);
                expect(component).toMatchSnapshot()
        })
})
