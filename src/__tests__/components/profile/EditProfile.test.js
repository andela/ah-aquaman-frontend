import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store";
import { EditProfile } from "../../../components/profile/editProfile";

describe("edit profile component tests", () => {
  const props = {
    profile: {
      username: "",
      bio: "",
      image: "",
    },
    loadProfile: jest.fn(),
    updateProfile: jest.fn(),
  };

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter className="container">
        <EditProfile {...props} />
      </BrowserRouter>
    </Provider>,
  );
  

  it("should handleChange", () => {
    const e = {
      target: {
        files: [new File(["../../../assets/download.jpeg"], "sample.png")],
      },
    };
    wrapper.find("EditProfile").instance().handleChange(e);
    const image = wrapper.find("EditProfile").instance().state.image;
    wrapper.find("EditProfile").instance().handleUpload(image);
    expect(wrapper.find("EditProfile").state().image.name).toEqual("sample.png");
  });

  it("should add file to state", () => {
    const e = {
      target: {
        name: "hey", value: "How are you",
      },
    };
    wrapper.find("EditProfile").instance().onChange(e);
    expect(wrapper.find("EditProfile").instance().state.hey).toEqual("How are you");
  });
  
  it("should submit a form", () => {
    const e = {
      preventDefault: () => {
      },
      target: {
        name: "hey", value: "How are you",
      },
    };
    wrapper.find("EditProfile").instance().onSubmit(e);
  });
});
