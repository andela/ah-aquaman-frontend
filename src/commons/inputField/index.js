import React from "react";

const InputField = ({
  name, type, placeholder, className, value, onInputChange, maxLength,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className={className}
    value={value}
    onChange={onInputChange}
    maxLength={maxLength}
    required
  />
);
export default InputField;
