import React from "react";
import { mount } from "enzyme";
import { EditProfile } from "../../../components/profile/editProfile";

describe("edit profile component tests", () => {
  let wrapper;
  const props = {
    profile: {
      username: "",
      bio: "",
      image: "",
    },
    loadProfile: jest.fn(),
    updateProfile: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(<EditProfile {...props} />);
  });

  it("should handleChange", () => {
    const e = {
      target: {
        files: [new File(["../../../assets/download.jpeg"], "sample.png")],
      },
    };
    wrapper.instance().handleChange(e);
    const image = wrapper.instance().state.image;
    wrapper.instance().handleUpload(image);
    expect(wrapper.state().image.name).toEqual("sample.png");
  });

  it("should add file to state", () => {
    const e = {
      target: {
        name: "hey", value: "How are you",
      },
    };
    wrapper.instance().onChange(e);
    expect(wrapper.instance().state.hey).toEqual("How are you");
  });
  
  it("should submit a form", () => {
    const e = {
      preventDefault: () => {
      },
      target: {
        name: "hey", value: "How are you",
      },
    };
    wrapper.instance().onSubmit(e);
  });
});
