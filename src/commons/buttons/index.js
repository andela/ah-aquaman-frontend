import React from "react";

const Button = ({
  text, onClick, type, isProcessing, className, id,
}) => (
  <button
    type={type}
    disabled={isProcessing}
    id={id}
    onClick={onClick}
    className={className}
  >
    {text}
  </button>
);
export default Button;
