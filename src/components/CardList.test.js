import { shallow } from "enzyme";
import CardList from "./CardList";

const mockRobots = [{ name: "sammy", email: "ebusam@gmail.com", id: 2 }];

const wrapper = shallow(<CardList robots={mockRobots} />);

it("expect to render cardlist", () => {
  expect(wrapper).toMatchSnapshot();
});
