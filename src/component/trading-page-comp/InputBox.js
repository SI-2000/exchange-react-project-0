import React from "react";

import classes from "./InputBox.module.css";

const InputBox = ({ value, name, unit, disabled = false }) => {
  return (
    <div
      className={`${classes["input-box"]} ${classes[name.en]}
       ${disabled ? classes["disabled-inp-box"] : undefined}`}
    >
      <label htmlFor={"tradeForm-" + name.en} className={classes["title"]}>
        {name.fa}
      </label>
      <input
        value={value}
        id={"tradeForm-" + name.en}
        type="text"
        autoComplete="off"
        disabled={disabled}
      />
      <label className={classes["unit"]} htmlFor={"tradeForm" + name.en}>
        {unit.fa}
      </label>
    </div>
  );
};

export default InputBox;
