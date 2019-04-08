import React from "react";

const Label = ({
  text, htmlFor,
}) => (
  <label
    htmlFor={htmlFor}
  >
    {text}
  </label>
);
export default Label;
