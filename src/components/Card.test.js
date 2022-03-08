// test file
import { shallow } from "enzyme";
import Card from "./Card";

const wrapper = shallow(<Card />);

it("expect to render Card component", () => {
  expect(wrapper.length).toEqual(1);
});

it("expect to make a snapshot to component", () => {
  expect(wrapper).toMatchSnapshot();
});
