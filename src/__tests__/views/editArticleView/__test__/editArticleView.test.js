import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { EditArticleView, mapStateToProps } from "../../../../views/editArticleView";

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);

const props = {
  match: {
    params: {
      slug: "article-slug",
    },
  },
  history: {
    push: jest.fn(),
  },
  profile: {
    profile: {},
  },
  isEditSuccessful: false,
  errors: {
    title: "error in title",
    description: "error in description",
    body: "error in body",
  },
  EditArticle: jest.fn(),
  getSingleArticle: jest.fn(),
};


describe("Edit article view test", () => {
  beforeEach(() => {
    localStorage.setItem("article", JSON.stringify({
      title: "test101",
      description: "javascript",
      body: "test body",
    }));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should render without crashing", () => {
    const props = {};
    const wrapper = shallow(<EditArticleView />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleErrors", () => {
    const wrapper = shallow(<EditArticleView {...props} />);
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.errors.title).toBe(props.errors.title);
  });

  it("should call handle submit", () => {
    const wrapper = shallow(<EditArticleView {...props} />);
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
    expect(wrapper.instance().props.EditArticle).toBeCalled();
  });

  it("should call handleInput", () => {
    const wrapper = shallow(<EditArticleView {...props} />);
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

  it("should handle errors on article update", () => {
    const wrapper = shallow(<EditArticleView {...props} />);
    wrapper.setProps({
      isEditSuccessful: false,
      errors: {
        title: "",
        description: "",
        body: "",
      },
    });
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.errors).toBeDefined();
  });

  it("should redirect after successful update of article", () => {
    const wrapper = shallow(<EditArticleView {...props} />);
    wrapper.setProps({
      isEditSuccessful: true,
    });
    const nextProps = {
      match: {
        params: {
          slug: "article-slug",
        },
      },
    };
    wrapper.instance().props.history.push(`/article/${nextProps.match.params.slug}`);
    expect(wrapper.instance().props.isEditSuccessful).toBe(true);
  });

  it("should map state to props", () => {
    const state = {
      articleCreateReducer: {
        errors: {},
        isEditSuccessful: true,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      errors: {},
      isEditSuccessful: true,
    });
  });
});
