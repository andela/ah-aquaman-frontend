import React from "react";
import { shallow } from "enzyme";
import { Articles, mapStateToProps } from "../../../../components/article/articleHomeComponent";

const props = {
  fetchArticlesAction: jest.fn(),
  articles: [
    {
      title: "test",
      image: "",
      slug: "article-slug",
    },
  ],
  author: {
    username: "testuser",
  },
};

describe("Article home component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Articles {...props} />);

    const instance = wrapper.instance();
    const spy = jest.spyOn(wrapper.instance().props, "fetchArticlesAction");
    instance.componentWillMount();
    expect(spy).toHaveBeenCalled();
  });
  
  it("should map state to props", () => {
    const state = {
      fetchArticlesReducer: {
        articles: {},
      },
    };
    expect(mapStateToProps(state)).toEqual({
      articles: {},
    });
  });
});
