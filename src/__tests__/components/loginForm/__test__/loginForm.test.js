import { shallow } from "enzyme";
import React from "react";
import Login from "../../../../components/loginForm";

describe("login form on login success", () => {
  const props = {
    onSubmit: jest.fn(),
    errors: null,
    emailError: "",
    passwordError: "",
    generalError: "",
    onRegister: jest.fn(),
    onPassword: jest.fn(),
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("login form on login fail", () => {
  const props = {
    onSubmit: jest.fn(),
    errors: {},
    emailError: "error",
    passwordError: "error",
    generalError: "error",
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
