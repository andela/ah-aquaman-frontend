import React from "react";

const InputField = ({
  name, type, placeholder, className,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className={className}
    required
  />
);
export default InputField;
