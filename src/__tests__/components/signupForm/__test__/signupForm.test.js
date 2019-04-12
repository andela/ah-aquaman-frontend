import { shallow } from "enzyme";
import React from "react";
import Signup from "../../../../components/signupForm";

describe("signupform on success registration", () => {
  const props = {
    onSubmit: jest.fn(),
    errors: null,
    onClick: jest.fn(),
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
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<Signup {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
