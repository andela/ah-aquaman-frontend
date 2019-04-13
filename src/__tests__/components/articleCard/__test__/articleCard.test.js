import React from "react";
import { shallow } from "enzyme";
import ArticleCard from "../../../../components/article/articleCard";

describe("ArticleCard component test", () => {
  const props = {
    author: {
      username: "testuser",
    },
    title: "test Article",
    description: "this is test description",
    body: "This is a test body",
  };
  const wrapper = shallow(<ArticleCard {...props} />);

  it("Should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
