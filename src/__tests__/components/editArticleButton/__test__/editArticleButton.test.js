import React from "react";
import { shallow } from "enzyme";
import { EditButton, mapStateToProps } from "../../../../components/article/editArticleButton";

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

describe("Edit button component test", () => {
  const props = {
    slug: "article-slug",
    hidden: "false",
  };

  beforeEach(() => {
    localStorage.setItem("token", token);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should render without crashing", () => {
    localStorage.clear();
    const wrapper = shallow(<EditButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render without crashing when logged in", () => {
    const props = {
      slug: "article-slug",
      hidden: "true",
    };
    const wrapper = shallow(<EditButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should map state to props", () => {
    const state = {
      articleCreateReducer: {
      },
    };
    expect(mapStateToProps(state)).toEqual({
      EditState: {},
    });
  });
});
