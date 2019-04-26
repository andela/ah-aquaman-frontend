import { shallow } from "enzyme";
import React from "react";
import FollowersList from "../../../views/profile/followersList";

describe("followers List component tests", () => {
  it("should render without crashing", () => {
    const props = {
      followersList: [
        { image: "test.jpg", username: "truly", bio: "am cool" },
      ],
    };
    const wrapper = shallow(<FollowersList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
