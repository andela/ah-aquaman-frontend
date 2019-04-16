import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ResetPasswordView, { 
  ResetPasswordView as ResetPasswordViewTest,
} from "../../../../views/resetView/resetPasswordView";

const initialState = {
  resetPasswordReducer: {
    message: "hello",
  },
};
const mockStore = configureStore();
const store = mockStore(initialState);

const props = {
  resetPasswordAction: jest.fn(),
  match: {
    params: {
      token: "ghjkbvfghj",
    },
  },
  changePasswordAction: jest.fn(),
  history: { push: jest.fn() },
};

const initialProps = {
  resetPasswordAction: jest.fn(),
  match: {
    params: {},
  },
};

describe("ResetPasswordView", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(
      <ResetPasswordViewTest {...props} />,
    );
    instance = wrapper.instance();
  });
  
  const wrapper1 = mount(
    <Provider store={store}>
      <ResetPasswordView {...props} />
    </Provider>,
  );

  it("should render without crashing", () => {
    expect(wrapper1).toMatchSnapshot();
  });

  it("should redirect on new message", () => {
    const email = "testemail@gmail.com";
    const wrapper = shallow(<ResetPasswordView {...props} />);
    wrapper.instance().props.resetPasswordAction(email);
    expect(wrapper.instance().props.resetPasswordAction).toBeCalled();
  });

  it("should call changePasswordAction when correct password data has been passed", () => {
    wrapper.setState({ password: "aciopeace", confirmPassword: "aciopeace" });
    instance.handlePasswordSubmit({
      preventDefault: jest.fn(),
    });
    expect(props.changePasswordAction).toHaveBeenCalled();
  });

  it("should fail when unmatching passwords are entered", () => {
    wrapper.setState({ password: "acio", confirmPassword: "acionpeace" });
    instance.handlePasswordSubmit({
      preventDefault: jest.fn(),
    });
  });

  it("should handle onChange with correct email input", () => {
    instance.onChange({ target: { name: "email", value: "apple@acio.com" } });
    expect(instance.state.email).toEqual("apple@acio.com");
  });

  it("should handle onChange with wrong email input", () => {
    instance.onChange({ target: { name: "email", value: "appleacio.com" } });
    expect(instance.state.errors.email).toEqual("Please enter a correct email address.");
  });
    
  it("should call component will receive props", () => {
    expect(wrapper.prop("detail")).toBeUndefined();
  });

  it("should call history.push to redirect to login page", () => {
    wrapper.setProps({ message: "fake message" });
    expect(props.history.push).toHaveBeenCalled();
  });

  it("should call the resetpassword action", () => {
    const component = mount(
      <ResetPasswordViewTest {...initialProps} />,
    );
    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          email: {
            value: "testemail@mail.com",
          },
        },
      },
    };
    component.find("#reset-form").simulate("submit", event);
    const spyProp = jest.spyOn(wrapper1.instance().props.children.props, "resetPasswordAction");
    expect(spyProp).toHaveBeenCalled();
  });
});
