import React from "react";
import { Link } from "react-router-dom";

const TagComponent = (props) => {
  const { tag } = props;
  return (
    <Link className="mt-1" to="#">{tag}</Link>
  );
};

export default TagComponent;
