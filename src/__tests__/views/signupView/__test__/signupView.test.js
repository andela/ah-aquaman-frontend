import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SignupView } from "../../../../views/signupView";

const jwt = require("jsonwebtoken");

const props = {
  signupAction: jest.fn(),
  history: {
    push: jest.fn(),
  },
};
const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);
const user = {
  username: "testuser123",
  email: "testuser123@gmail.com",
  password: "password123",
};
const generateToken = (user) => {
  const token = jwt.sign(user, "sfhjjkdfjdkdfjdk", { expiresIn: 60 * 60 * 24 });
  return token; 
};
const token = generateToken(user);

describe("SignupView", () => {
  it("should render without crashing", () => {
    const props = {};
    const instance = new SignupView(props);
    const wrapper = shallow(instance.render());
    expect(wrapper).toMatchSnapshot();
  });

  it("should redirect on new token", () => {
    const newProps = {
      ...props,
      token,
    };
    
    const wrapper = shallow(<SignupView {...props} />);
    const spyProp = jest.spyOn(wrapper.instance().props.history, "push");
    wrapper.setProps(newProps);
    expect(spyProp).toHaveBeenCalled();
  });

  it("should raise error on password mis-match", () => {
    const props = {
      signupAction: jest.fn(),
      history: {
        push: jest.fn(),
      },
    };

    const wrapper = mount(
      <Provider store={store}>
        <SignupView store={store} {...props} />
      </Provider>,
    );

    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          username: {
            value: "testuser123",
          },
          email: {
            value: "testuser123@gmail.com",
          },
          password1: {
            value: "Password123",
          },
          password2: {
            value: "Password123w",
          },
        },
      },
    };
    wrapper.find("#signup-button").first().simulate("submit", event);
  });

  it("should call the signupAction", () => {
    const props = {
      signupAction: jest.fn(),
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = mount(
      <Provider store={store}>
        <SignupView store={store} {...props} />
      </Provider>,
    );
    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          username: {
            value: "testuser123",
          },
          email: {
            value: "testuser123@gmail.com",
          },
          password1: {
            value: "Password123",
          },
          password2: {
            value: "Password123",
          },
        },
      },
    };
    wrapper.find("#signup-button").first().simulate("submit", event);
    const spyProp = jest.spyOn(wrapper.instance().props.children.props, "signupAction");
    expect(spyProp).toHaveBeenCalled();
  });
});
