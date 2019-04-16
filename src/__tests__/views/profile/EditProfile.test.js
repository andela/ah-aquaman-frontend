import React from "react";
import { mapStateToProps } from "../../../components/profile/editProfile";

describe("Edit profile view tests", () => {
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
});
