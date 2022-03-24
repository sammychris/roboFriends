import { shallow } from "enzyme";
import Scroll from "./Scroll";

const wrapper = shallow(<Scroll />);

it("expect to render scroll", () => {
  expect(wrapper).toMatchSnapshot();
});
