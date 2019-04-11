import { shallow } from "enzyme";
import React from "react";
import HomeView from "../../../../views/homeView";

describe("Home view component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<HomeView />);
    expect(wrapper).toMatchSnapshot();
  });
});
