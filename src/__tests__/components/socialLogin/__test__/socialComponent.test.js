import { shallow } from "enzyme";
import React from "react";
import Social from "../../../../components/loginForm/socialComponent";

describe("button view component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Social />);
    expect(wrapper).toMatchSnapshot();
  });
});
