import { shallow } from "enzyme";
import React from "react";
import ProfileStats from "../../../views/profile/ProfileStats";

describe("Home view component", () => {
  const props = {
    following: {
      following: [],
      isFollowingSomeone: false,
    },
    followers: {
      followers: [],
      isFollowingSomeone: false,
    },
  };
  
  it("should render without crashing", () => {
    const wrapper = shallow(<ProfileStats {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
