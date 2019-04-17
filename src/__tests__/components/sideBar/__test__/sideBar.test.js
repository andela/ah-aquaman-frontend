import React from "react";
import { shallow } from "enzyme";
import Sidebar from "../../../../components/article/sidebar";

describe("Sidebar component test", () => {
  const wrapper = shallow(<Sidebar />);

  it("Should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
