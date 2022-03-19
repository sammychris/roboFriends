import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  // this runs before each test...
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("test App", () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance()).toEqual(null);
});
