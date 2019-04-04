import React from "react";
import ErrorMessage from "../../../../commons/errorMessage";

describe("error message component", () => {
  it("should render without crashing", () => {
    expect(ErrorMessage({ text: "this", className: "primary" })).toEqual(<p className="text-danger">this</p>);
  });
});
