import React from "react";
import { shallow } from "enzyme";
import { CreateArticleView, mapStateToProps } from "../../../../views/createArticleView";

const props = {
  history: {
    push: jest.fn(),
  },
  isSuccessful: false,
  errors: {
    title: "incorrect title",
    description: "incorrect description",
    body: "field can not be blank",
  },
  CreateArticle: jest.fn(),
};


describe("<CreateArticleView />", () => {
  it("should call handleErrors", () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.errors.title).toBe(props.errors.title);
  });

  it("should call handle submit", () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          title: {
            value: "test article",
          },
          description: {
            value: "this is a test article",
          },
          body: {
            value: "this article will be worth your time",
          },
        },
      },
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance().props.CreateArticle).toBeCalled();
  });

  it("should call handleInput", () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.instance().setState = jest.fn();
    const event = {
      target: {
        title: "",
        value: "",
      },
    };
    wrapper.instance().handleInput(event);
    expect(wrapper.instance().setState).toBeCalled();
  });

  it("should handle errors on article creation", () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.setProps({
      isSuccessful: false,
      errors: {
        title: "",
        description: "",
        body: "",
      },
    });
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.errors).toBeDefined();
  });

  it("should redirect after successful article creation", () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.setProps({
      isSuccessful: true,
      article: {
        slug: "aidsd-s2",
      },
    });
    const nextProps = {
      article: {
        slug: "aidsd-s2",
      },
    };
    wrapper.instance().props.history.push(`/article/${nextProps.article.slug}`);
    expect(wrapper.instance().props.article).toBeDefined();
  });

  it("should map state to props", () => {
    const state = {
      articleCreateReducer: {
        article: { title: "test article", description: "test article", body: "test article" },
        errors: {},
        isSuccessful: true,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      article: { title: "test article", description: "test article", body: "test article" },
      errors: {},
      isSuccessful: true,
    });
  });
});
