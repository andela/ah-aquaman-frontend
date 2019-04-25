import { shallow } from "enzyme";
import React from "react";
import RateButton from "../../../components/article/rateArticleButton";

describe("ratings button view component", () => {
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

  const props = {
    username: "scdnsdjkcnjksd",
  };

  beforeEach(() => {
    localStorage.setItem("token", token);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<RateButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
