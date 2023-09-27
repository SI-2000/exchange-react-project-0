import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, disabled, className }) => {
  return (
    <button
      className={`${classes[className]} ${classes[""]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
