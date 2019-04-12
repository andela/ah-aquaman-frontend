import { shallow } from "enzyme";
import React from "react";
import CircularProgressLoader from "../../../../commons/progressLoader";

describe("progress loader view component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CircularProgressLoader loading={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
