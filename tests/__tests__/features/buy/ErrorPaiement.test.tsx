import ErrorPaiment from "features/buy/ErrorPaiment";
import { shallow } from "enzyme";

describe("ErrorPaiment", () => {
  it("renders", () => {
    const component = shallow(<ErrorPaiment />);
    expect(component).toMatchSnapshot();
  });
});
