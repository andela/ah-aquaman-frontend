import React from "react";
import { shallow } from "enzyme";
import ImageBanner from "../../../../components/article/ImageBanner";

describe("ArticleCard component test", () => {
  const wrapper = shallow(<ImageBanner />);

  it("Should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
