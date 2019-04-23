import React from "react";
import { shallow, mount } from "enzyme";
import Editor from "../../../../components/article/articleEditor";
import { EditArticleView } from "../../../../views/editArticleView/index";
import { CreateArticleView } from "../../../../views/createArticleView/index";

describe("Sidebar component test", () => {
  const wrapper = shallow(<Editor />);

  it("Should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle on Change when editing tags", () => {
    const article = {
      slug: "54-test-titke-bero-hello-test",
      title: "test titke bero hello test.",
      body: "test",
      description: "This is the application",
      tagList: ["aaa", "hehe", "hi", "hii", "hoho", "huhu", "test", "test."],
    };
    localStorage.setItem("article", JSON.stringify(article));
    const wrapper = shallow(<EditArticleView />);
    wrapper.instance().handleChange(["one", "ONE", "Test"]);
    expect(wrapper.instance().state.tagList).toEqual(["one", "test"]);
  });

  it("should handle on Change when creating tags", () => {
    const wrapper = shallow(<CreateArticleView />);
    wrapper.instance().handleChange(["one", "ONE", "Test"]);
    expect(wrapper.instance().state.tagList).toEqual(["one", "test"]);
  });
});
