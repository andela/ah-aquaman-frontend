import React from "react";
import { shallow } from "enzyme";
import Editor from "../../../../components/article/articleEditor";

describe("Sidebar component test", () => {
  const wrapper = shallow(<Editor />);

  it("Should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
