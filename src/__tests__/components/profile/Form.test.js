import React from "react";
import { mount } from "enzyme";
import UpdateForm from "../../../views/profile/UpdateForm";

it("calls onSubmit prop function when form is submitted", () => {
  const onSubmitFn = jest.fn();
  const wrapper = mount(<UpdateForm onSubmit={onSubmitFn} />);
  const form = wrapper.find("form");
  form.simulate("submit");
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});
