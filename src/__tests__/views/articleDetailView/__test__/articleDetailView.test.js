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
      isBookmarked: false,
      match: {
        params: {
          slug: "article-slug",
        },
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
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
        author: { username: "test user" },
      },
      loading: true,
      match: {
        params: {
          slug: "article-slug",
        },
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
    };
    const wrapper = new ArticleDetailView(props);
    wrapper.state = { notFound: true };
    expect(wrapper.render()).toMatchSnapshot();
  });


  it("should call get single article function", () => {
    const props = {
      article: {
        title: "test title",
        author: { username: "test user" },
      },
      match: {
        params: {
          slug: "article-slug",
        },
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
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
      bookmarkReducer: {
        isBookmarked: false,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      article: { title: "test article", description: "test article", body: "test article" },
      loading: true,
      isBookmarked: false,
    });
  });
  
  it("should call the handle bookmark function", () => {
    const props = {
      article: {
        title: "test title",
        author: "testuser",
      },
      isBookmarked: false,
      match: {
        params: {
          slug: "article-slug",
        },
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
      bookmarkArticleAction: jest.fn(),
    };
    
    const wrapper = shallow(
      <ArticleDetailView {...props} />,
    );
    const instance = wrapper.instance();
    instance.handleBookmark({ preventDefault: jest.fn() });
    expect(props.bookmarkArticleAction).toHaveBeenCalled();
  });
});
