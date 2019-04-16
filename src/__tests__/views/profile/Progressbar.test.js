import { shallow } from "enzyme";
import React from "react";
import Progress from "../../../views/profile/Progress";

describe("Home view component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper).toMatchSnapshot();
  });
});
