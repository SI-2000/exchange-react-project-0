import React from "react";

import classes from "./SelectBtn.module.css";

const SelectBtn = ({ label, selectedState, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${classes["select-btn"]}  ${classes[label]} ${
        selectedState === label ? classes["active"] : undefined
      }`}
    >
      <div className={classes["btn-border-style-helper"]}>{label}</div>
    </button>
  );
};

export default SelectBtn;
