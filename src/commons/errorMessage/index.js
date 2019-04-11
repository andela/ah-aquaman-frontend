import React from "react";

export default function ErrorMessage({
  text, className,
}) {
  return (
    <p
      className="text-danger"
    >
      {text}
    </p>
  );
}
