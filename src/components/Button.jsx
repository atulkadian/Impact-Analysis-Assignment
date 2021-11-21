import React from "react";
import "./Button.css";
const Button = (props) => {
  return <button onClick={props.onClick}>{props.txt}</button>;
};

export default Button;
