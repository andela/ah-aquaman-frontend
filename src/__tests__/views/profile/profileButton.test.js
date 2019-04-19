import { shallow } from "enzyme";
import React from "react";
import ProfileButton from "../../../views/profile/profileButton";

describe("ProfileButton component", () => {
  it("should render without crashing", () => {
    const props = {
      isProcessing: true, isFollowing: false, unFollowUser: () => {}, username: "truly",
    };
    const wrapper = shallow(<ProfileButton {...props} />);
    wrapper.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });
});
