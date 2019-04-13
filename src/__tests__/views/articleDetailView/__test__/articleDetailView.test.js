import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { ArticleDetailView, mapStateToProps } from "../../../../views/articleDetailView";


describe("ArticleDetailView", () => {
  it("should render without crashing", () => {
    const props = {
      article: {
        title: "test title",
        author: "testuser",
      },
      loading: false,
      match: {
        params: {
          slug: "article-slug",
        },
      },
      getSingleArticle: jest.fn(),
      getComments: jest.fn(),
    };

    const instance = shallow(<ArticleDetailView {...props} />);
    instance.setProps({
      loading: false,
    });
    expect(instance).toMatchSnapshot();
  });

  it("should render 404 view without crashing", () => {
    const props = {
      article: {
        title: "",
      },
      loading: true,
      match: {
        params: {
          slug: "article-slug",
        },
      },
      getSingleArticle: jest.fn(),
    };
    const wrapper = new ArticleDetailView(props);
    wrapper.state = { notFound: true };
    expect(wrapper.render()).toMatchSnapshot();
  });


  it("should call getSingleArticle after will mount ", () => {
    const props = {
      articleReducer: {
        article: {
          title: "test title",
        },
      },
      match: {
        params: {
          slug: "article-slug",
        },
      },
      getSingleArticle: jest.fn(),
      getComments: jest.fn(),
    };
    const wrapper = mount(<Router><ArticleDetailView {...props} /></Router>);
    const spyProp = jest.spyOn(wrapper.instance().props.children.props, "getSingleArticle");
    expect(spyProp).toHaveBeenCalled();
  });

  it("should map state to props", () => {
    const state = {
      ArticleReducer: {
        article: { title: "test article", description: "test article", body: "test article" },
        loading: true,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      article: { title: "test article", description: "test article", body: "test article" },
      loading: true,
    });
  });
});
