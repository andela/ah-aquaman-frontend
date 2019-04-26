import { shallow } from "enzyme";
import React from "react";
import FollowingList from "../../../views/profile/followingList";

describe("following List component tests", () => {
  it("should render without crashing", () => {
    const props = {
      list: [
        { image: "test.jpg", username: "truly", bio: "am cool" },
      ],
    };
    const wrapper = shallow(<FollowingList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
