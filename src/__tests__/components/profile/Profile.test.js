import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/index";
import { loadProfile } from "../../../actions/profile/profileActions";
import Profile from "../../../components/profile/profile";

describe("profile component tests", () => {
  it("should not regress", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should dispatch load profile", () => {
    store.dispatch(loadProfile());
    expect(store.getState().profile).toEqual(
      {
        isLoading: true, isUpdating: null, msg: null, profile: null,
      },
    );
  });

  it("should render when mounted", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter className="container">
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    const data = {
      isLoading: true, isUpdating: null, msg: null, profile: null,
    };
    wrapper.setProps({ profile: data });
  });
});
