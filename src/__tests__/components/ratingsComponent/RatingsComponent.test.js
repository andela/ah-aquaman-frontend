import { shallow } from "enzyme";
import React from "react";
import Ratings from "../../../components/article/ratingsComponent";

describe("ratings component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper).toMatchSnapshot();
  });
});
