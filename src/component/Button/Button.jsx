import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>
        {props.text} <span>{props.icon}</span>
      </button>
    </>
  );
};

export default Button;
