import React from "react";
import { shallow } from "enzyme";
import store from "../store";

it("renders without crashing", () => {
  const wrapper = shallow(<store />);
  expect(wrapper).toMatchSnapshot();
});
