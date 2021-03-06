import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SignupView, mapStateToProps } from "../../../../views/signupView";

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

  it("should map state to props", () => {
    const state = {
      signupReducer: {
        token: "",
        errors: {},
        loading: true,
        isSuccessful: true,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      token: "",
      errors: {},
      loading: true,
      isSuccessful: true,
    });
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

  it("should show error message on weak username", () => {
    const wrapper = shallow(<SignupView {...props} />);
    wrapper.instance().setState = jest.fn();
    const event = {
      target: {
        name: "username",
        value: "jo",
      },
    };
    wrapper.instance().onChange(event);
    expect(wrapper.instance().setState).toBeCalled();
  });

  it("should hide error message on strong username", () => {
    const wrapper = shallow(<SignupView {...props} />);
    wrapper.instance().setState = jest.fn();
    const event = {
      target: {
        name: "username",
        value: "johnbashabe",
      },
    };
    wrapper.instance().onChange(event);
    expect(wrapper.instance().setState).toBeCalled();
  });

  it("should show error message on invalid email", () => {
    const wrapper = shallow(<SignupView {...props} />);
    wrapper.instance().setState = jest.fn();
    const event = {
      target: {
        name: "email",
        value: "jjdgmail.com",
      },
    };
    wrapper.instance().onChange(event);
    expect(wrapper.instance().setState).toBeCalled();
  });

  it("should hide error message on valid email", () => {
    const wrapper = shallow(<SignupView {...props} />);
    wrapper.instance().setState = jest.fn();
    const event = {
      target: {
        name: "email",
        value: "jjdnnd@gmail.com",
      },
    };
    wrapper.instance().onChange(event);
    expect(wrapper.instance().setState).toBeCalled();
  });

  it("should show error message on weak password", () => {
    const wrapper = shallow(<SignupView {...props} />);
    wrapper.instance().setState = jest.fn();
    const event = {
      target: {
        name: "password1",
        value: "pass",
      },
    };
    wrapper.instance().onChange(event);
    expect(wrapper.instance().setState).toBeCalled();
  });

  it("should hide error message on strong password", () => {
    const wrapper = shallow(<SignupView {...props} />);
    wrapper.instance().setState = jest.fn();
    const event = {
      target: {
        name: "password2",
        value: "password123",
      },
    };
    wrapper.instance().onChange(event);
    expect(wrapper.instance().setState).toBeCalled();
  });
});
