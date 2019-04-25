import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import store from "../../../../store";
import Navbar from "../../../../components/article/navbarComponent/Navbar";

// const initialState = {};
// const mockStore = configureStore();
// const store = mockStore(initialState);

describe("Navbar not logged in test", () => {
  const props = {
    state: {
      hidden: true,
    },
  };

  it("should render without crashing", () => {
    const wrapper = shallow(<Navbar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Navbar logged in test", () => {
  beforeEach(() => {
    localStorage.setItem("token", "token");
  });

  const props = {
    state: {
      hidden: false,
    },
    history: {
      push: jest.fn(),
    },
  };

  it("component should mount", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Navbar {...props} />
        </Router>
      </Provider>,
    );
    expect(wrapper.instance().props.children.props.children.props.state).toEqual({ hidden: false });
  });
});
