import {shallow} from "enzyme"
import ThankForm from "features/buy/ThankForm"

describe("ThankForm", () =>{
        
        it("rendets", () => {
                const component = shallow(<ThankForm />);
                expect(component).toMatchSnapshot()
        })
})
