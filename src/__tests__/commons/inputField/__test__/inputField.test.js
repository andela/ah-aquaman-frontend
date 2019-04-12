import { shallow } from "enzyme";
import React from "react";
import InputField from "../../../../commons/inputField";

describe("Home view component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper).toMatchSnapshot();
  });
});
