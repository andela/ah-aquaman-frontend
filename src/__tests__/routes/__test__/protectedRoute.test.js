import decode from "jwt-decode";
import Authenticate from "../../../routes/protectedRoutes";

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
});
