import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { LoginView } from "../../../../views/loginView";

const props = {
  loginAction: jest.fn(),
  onChangeRegister: jest.fn(),
  history: {
    push: jest.fn(),
  },
};

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);

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
    const wrapper = mount(<LoginView {...props} />);
    wrapper.find("#register").first().simulate("click");
    const spyProp = jest.spyOn(wrapper.instance().props.history, "push");
    expect(spyProp).toHaveBeenCalled();
  });

  it("should redirect to reset-password", () => {
    const wrapper = mount(<LoginView {...props} />);
    wrapper.find("#reset-password").first().simulate("click");
    const spyProp = jest.spyOn(wrapper.instance().props.history, "push");
    expect(spyProp).toHaveBeenCalled();
  });
  
  it("should call the login action", () => {
    const props = {
      loginAction: jest.fn(),
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = mount(
      <Provider store={store}>
        <LoginView store={store} {...props} />
      </Provider>,
    );
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
    wrapper.find("#login-button").first().simulate("submit", event);
    const spyProp = jest.spyOn(wrapper.instance().props.children.props, "loginAction");
    expect(spyProp).toHaveBeenCalled();
  });
});
