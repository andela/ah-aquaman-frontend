import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Navbar from "../../../../components/article/navbarComponent/Navbar";

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);

describe("NavBar not logged in test", () => {
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
