import React, { useEffect } from "react";

import useInput from "../../hooks/use-input";
import classes from "./InputBox.module.css";

const InputBox = ({ value, name, unit, disabled = false }) => {
  const {
    value: inputValue,
    isValid: inputIsValid,
    hasError,
    inputHasError,
    valueChangeHandler: inputChangeHandler,
    inputBlueHnadler,
    reset: resetInput,
  } = useInput((val) => {
    var regex = /^[0-9]+\.?[0-9]*$/;
    return regex.test(val);
  });


  return (
    <div
      className={`${classes["input-box"]} ${classes[name.en]}
       ${disabled ? classes["disabled-inp-box"] : undefined} ${
        hasError && !disabled && classes["inp-has-error"]
      }`}
    >
      <label htmlFor={"tradeForm-" + name.en} className={classes["title"]}>
        {name.fa}
      </label>
      <input
        value={value || inputValue}
        id={"tradeForm-" + name.en}
        name={name.en}
        type="text"
        autoComplete="off"
        disabled={disabled}
        onChange={inputChangeHandler}
        onBlur={inputBlueHnadler}
      />
      <label className={classes["unit"]} htmlFor={"tradeForm" + name.en}>
        {unit.fa}
      </label>
    </div>
  );
};

export default InputBox;
