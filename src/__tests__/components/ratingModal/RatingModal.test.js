import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import store from "../../../store/index";
import { RatingModal } from "../../../components/article/ratingsModel";

describe("RatingsModal component", () => {
  const props = {
    handleRate: jest.fn(),
    RateAction: jest.fn(),
    event: {
      target: {
        value: "",
      },
    },
  };

  it("testing rating handler", () => {
    const wrapper = mount(<RatingModal {...props} />);
    wrapper.instance().handleRate();
    wrapper.instance().handleChange(props.event);
  });

  it("testing rating handler with rating greater than zero", () => {
    const wrapper = mount(<RatingModal {...props} />);
    wrapper.setState({ ratevalue: 3 });
    wrapper.instance().handleRate();
  });
});
