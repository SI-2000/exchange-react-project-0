import React from "react";

import classes from "./CustomButton.module.css";

const CustomButton = ({ children, disabled, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes["custom-btn"]} ${classes[className]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
