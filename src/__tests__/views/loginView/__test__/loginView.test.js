import React from "react";
import { shallow } from "enzyme";
import { LoginView, mapStateToProps } from "../../../../views/loginView";

const props = {
  loginAction: jest.fn(),
  socialAction: jest.fn(),
  onChangeRegister: jest.fn(),
  history: {
    push: jest.fn(),
  },
  facebookHandler: jest.fn(),
  googleHandler: jest.fn(),
};

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

describe("LoginView", () => {
  const wrapper = shallow(<LoginView {...props} />);
  it("should render without crashing", () => {
    const props = {};
    const instance = new LoginView(props);
    const wrapper = shallow(instance.render());
    expect(wrapper).toMatchSnapshot();
  });

  it("should redirect on new token", () => {
    const newProps = {
      ...props,
      token,
    };
    const wrapper = shallow(<LoginView {...props} />);
    const spyProp = jest.spyOn(wrapper.instance().props.history, "push");
    wrapper.setProps(newProps);
    expect(spyProp).toHaveBeenCalled();
  });


  it("should redirect to register", () => {
    wrapper.find("Login").dive().find("#register")
      .simulate("click");
    const spyProp = jest.spyOn(wrapper.instance().props.history, "push");
    expect(spyProp).toHaveBeenCalled();
  });

  it("should redirect to reset-password", () => {
    wrapper.find("Login").dive().find("#reset-password").first()
      .simulate("click");
    const spyProp = jest.spyOn(wrapper.instance().props.history, "push");
    expect(spyProp).toHaveBeenCalled();
  });
  
  it("should call the login action", () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          email: {
            value: "testemail@mail.com",
          },
          password: {
            value: "Password1",
          },
        },
      },
    };
    wrapper.find("Login").dive().find("form")
      .simulate("submit", event);
    const spyProp = jest.spyOn(wrapper.instance().props, "loginAction");
    expect(spyProp).toHaveBeenCalled();
  });

  it("should call facebook action", () => {
    wrapper.instance().socialHandler({ accessToken: "token" });
    expect(wrapper.instance().props.socialAction).toBeCalled();
  });

  it("should call google action", () => {
    wrapper.instance().socialHandler({ tokenId: "token" });
    expect(wrapper.instance().props.socialAction).toBeCalled();
  });

  it("should map state to props", () => {
    const state = {
      loginReducer: {
        token: "",
        errors: {},
        isSuccessful: true,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      token: "",
      errors: {},
      isSuccessful: true,
    });
  });
});
