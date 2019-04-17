import React from "react";
import { shallow } from "enzyme";
import { DeleteButton, mapStateToProps } from "../../../../components/article/deleteArticleButton";

const props = {
  isArticleDeleted: false,
  slug: "article-slug",
  history: {
    push: jest.fn(),
  },
  DeleteArticle: jest.fn(),
};

global.confirm = () => true;

const user = {
  username: "Roy",
  email: "roy@andela.com",
  password: "spidermansucks123",
};

const generateToken = (user) => {
  const jwt = require("jsonwebtoken");
  const token = jwt.sign(user, "sfhjjkdfjdkdfjdk", { expiresIn: 60 * 60 * 24 });
  return token; 
};

const token = generateToken(user);

describe("delete button component test", () => {
  beforeEach(() => {
    localStorage.setItem("token", token);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should call handle delete", () => {
    localStorage.clear();
    const wrapper = shallow(<DeleteButton {...props} />);
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleDelete(event);
    expect(wrapper.instance().props.DeleteArticle).toBeCalled();
  });

  it("should redirect after article deleted", () => {
    const wrapper = shallow(<DeleteButton {...props} />);
    wrapper.setProps({
      isArticleDeleted: true,
    });
    const spyProp = jest.spyOn(wrapper.instance().props.history, "push");
    expect(spyProp).toHaveBeenCalled();
  });

  it("should map state to props", () => {
    const state = {
      articleCreateReducer: {
        isArticleDeleted: true,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      isArticleDeleted: true,
    });
  });
});
