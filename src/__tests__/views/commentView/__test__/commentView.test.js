import React from "react";
import { mount } from "enzyme";
import { CommentView } from "../../../../views/commentView";

describe("CommentView", () => {
    const props = {
       event: {
           target: {
               elements: {
                   comment: {
                       value: "comment"
                   },
                   slug_name: {
                       value: "comments-slug"
                   }
               },
           },
           preventDefault: jest.fn(),
       },
       addComment: jest.fn(),
    };

    it("should call handle submit", () => {
        const wrapper = mount(<CommentView  {...props}/>)
        wrapper.instance().handleSubmit(props.event)
    });

    it("should test button click", () => {
        const wrapper = mount(<CommentView  {...props}/>)
        wrapper.find("button").simulate("click");
    });
});
