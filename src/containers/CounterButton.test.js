import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

const wrapper = shallow(<CounterButton />);

it("test a stateful component using snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("test a stateful component", () => {
  wrapper.find("#counter").simulate("click");
  wrapper.find("#counter").simulate("click");
  expect(wrapper.find("#show-count").text()).toEqual("2");
});
