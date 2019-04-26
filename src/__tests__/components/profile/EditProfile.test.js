import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";
import { EditProfile } from "../../../components/profile/editProfile";

describe("edit profile component tests", () => {
  let wrapperComponent;
  let wrappedComponent;
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
    wrapperComponent = mount(
      <Provider store={store}>
        <Router><EditProfile {...props} /></Router>
      </Provider>,
    );
    wrappedComponent = wrapperComponent.find("EditProfile").instance();
  });

  it("should handleChange", () => {
    const e = {
      target: {
        files: [new File(["../../../assets/download.jpeg"], "sample.png")],
      },
    };
    wrappedComponent.handleChange(e);
    const image = wrappedComponent.state.image;
    wrappedComponent.handleUpload(image);
    expect(wrappedComponent.state.image.name).toEqual("sample.png");
  });

  it("should add file to state", () => {
    const e = {
      target: {
        name: "hey", value: "How are you",
      },
    };
    wrappedComponent.onChange(e);
    expect(wrappedComponent.state.hey).toEqual("How are you");
  });

  it("should submit a form", () => {
    const e = {
      preventDefault: () => {
      },
      target: {
        name: "hey", value: "How are you",
      },
    };
    wrappedComponent.onSubmit(e);
  });
});
