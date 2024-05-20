import React from "react";
import "./Clear.css";
export const Clear = (props) => (
  <div className="clear" onClick={() => props.handleClick()}>
    clear
  </div>
);
