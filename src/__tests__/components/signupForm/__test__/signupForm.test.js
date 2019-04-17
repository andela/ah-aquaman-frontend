import { shallow } from "enzyme";
import React from "react";
import Signup from "../../../../components/signupForm";

describe("signupform on success registration", () => {
  const props = {
    onSubmit: jest.fn(),
    errors: {},
    onClick: jest.fn(),
    validateInput: {},
  };
  
  it("should render without crashing", () => {
    const wrapper = shallow(<Signup {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("signupform on registration failure", () => {
  const props = {
    onSubmit: jest.fn(),
    errors: {},
    validateInput: {},
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<Signup {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
