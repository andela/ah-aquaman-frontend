import { shallow } from "enzyme";
import React from "react";
import ArticleComponent from "../../../../components/article/articleComponent";

describe("Article component test", () => {
  it("should render without crashing", () => {
    const props = {
      article: {
        title: "test title",
        image: "http://imageurl.com/article_image.jpg",
        tagList: [],
        author: {
          image: "http://imageurl.com/avatar.jpg",
          username: "testuser",
        },
      },
    };
    const wrapper = shallow(<ArticleComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Article component test", () => {
  it("should render without crashing", () => {
    const props = {
      article: {
        title: "test title",
        image: null,
        tagList: [],
        author: {
          image: "http://imageurl.com/avatar.jpg",
          username: "testuser",
        },
      },
    };
    const wrapper = shallow(<ArticleComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const props = {
      article: {
        title: "test title",
        image: null,
        tagList: [],
        read_time: "test read time",
        author: {
          image: "http://imageurl.com/avatar.jpg",
          username: "testuser",
        },
      },
    };
    const wrapper = shallow(<ArticleComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(props.article.read_time).toBe("test read time");
  });
});
