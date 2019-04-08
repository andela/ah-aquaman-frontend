import { shallow } from "enzyme";
import React from "react";
import ProfileStats from "../../../views/profile/ProfileStats";

describe("Home view component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<ProfileStats />);
    expect(wrapper).toMatchSnapshot();
  });
});
