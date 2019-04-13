import React from "react";
import decode from "jwt-decode";
import { shallow } from "enzyme";
import ProtectedRoute, { Authenticate } from "../../../routes/protectedRoutes";

describe("protected routes", () => {
  it("should render without crashing", () => {
    expect(Authenticate("token")).toEqual(false);
  });

  it("should render a decoded token", () => {
    const user = {
      username: "Roy",
      email: "roy@andela.com",
      password: "spidermansucks123",
    };
    
    const jwt = require("jsonwebtoken");
    const token = jwt.sign(user, "sfhjjkdfjdkdfjdk", { expiresIn: 60 * 60 * 24 });
    const response = {
      res: jwt.decode(token),
    };
    expect(Authenticate(token)).toEqual(response);
  });

  it("should protectedRoute component should render without crashing", () => {
    const wrapper = shallow(<ProtectedRoute />);
    expect(wrapper).toMatchSnapshot();
  });

  it("test valid token at login but expired", () => {
    const falseToken = Authenticate(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtpbWJzaW1vbjJAZ21haWwuY29tIiwiZXhwIjoxNTQyMDYxMjQ3LCJ1c2VybmFtZSI6ImtpbWJ1Z3AifQ.yz9jMoPBnKy9Tko_hhCwakNwZkeRLD4nc13A3LzyJbw",
    );
    expect(falseToken).toEqual(false);
  });
  
  it("test invalid token", () => {
    const invalidToken = Authenticate(
      "aasa",
    );
    expect(invalidToken).toEqual(false);
  });
});
