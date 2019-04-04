import { shallow } from "enzyme";
import React from "react";
import Button from "../../../../commons/buttons";

describe("button view component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
