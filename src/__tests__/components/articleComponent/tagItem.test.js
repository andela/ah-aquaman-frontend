import { shallow } from "enzyme";
import React from "react";
import TagComponent from "../../../components/article/articleComponent/tagComponent";

describe("tag tests", () => {
  const props = ["test", "test1"];
  it("should not regress", () => {
    const wrapper = shallow(<TagComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
