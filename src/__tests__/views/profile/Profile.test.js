import React from "react";
import { shallow } from "enzyme";
import { mapStateToProps } from "../../../components/profile/profile";
import EditProfileView from "../../../views/profile/editprofile";
import Profile from "../../../views/profile/profile";

let wrapper = "";
describe("Profile component view tests", () => {
  it("should not regress", () => {
    const props = {
      profile: {
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        image: "image",
        bio: "images",
      },
      isLoading: true,
    };
    wrapper = shallow(<Profile {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should  map profile state to props", () => {
    const profileState = {
      profile: {
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        image: "image",
        bio: "images",
      },
    };
    const appState = [profileState];
    const componentState = mapStateToProps(appState[0]);
    expect(componentState).toEqual(profileState);
  });
  it("should render profileView", () => {
    const props = {
      profile: {
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        image: "image",
        bio: "images",
      },
      isLoading: true,
      state: {
        image: null,
        url: "",
        progress: 0,
        bio: "",
        isUploading: null,
      },
      isUpdating: true,
    };
    wrapper = shallow(<EditProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
