import React from "react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".App")).toHaveLength(1);
});
