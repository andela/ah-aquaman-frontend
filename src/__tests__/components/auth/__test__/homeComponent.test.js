import { shallow } from "enzyme";
import React from "react";
import Home from "../../../../components/auth/homeComponent";

describe("Home component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
