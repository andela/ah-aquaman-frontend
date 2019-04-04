import { shallow } from "enzyme";
import React from "react";
import Route from "../../../routes/index";

describe("Route component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Route />);
    expect(wrapper).toMatchSnapshot();
  });
});
