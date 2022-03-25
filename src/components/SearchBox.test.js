import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

const wrapper = shallow(<SearchBox />);

it("expect to render searchbox", () => {
  expect(wrapper).toMatchSnapshot();
});
