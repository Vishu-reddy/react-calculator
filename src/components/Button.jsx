import React from "react";
import "./Button.css";
const operator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

const Button = (props) => {
  return (
    <div
      className={`button-wrapper ${
        operator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};
export default Button;
