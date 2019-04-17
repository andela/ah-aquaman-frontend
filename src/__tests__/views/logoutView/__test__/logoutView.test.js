import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import LogoutPage from "../../../../views/logoutView";

const props = {
  history: {
    push: jest.fn(),
  },
};

describe("Logout view test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<LogoutPage {...props} />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
