import React, { useEffect } from "react";

import useInput from "../../hooks/use-input";
import classes from "./InputBox.module.css";

const validators = [
  (val) => {
    var regex = /^[0-9]+\.?[0-9]*$/;
    const isValid = regex.test(val);
    const errorMessage = isValid ? "" : "لطفا مقدار معتبر وارد کنید.";
    return {
      isValid,
      errorMessage,
    };
  },
  (val) => {
    const errorMessage =
      "مقدار مشخص شده برای معامله بیشتر از موجودی حساب شما میباشد.";
    return {
      isValid: true,
      errorMessage,
    };
  },
];

const InputBox = ({ value, name, unit, disabled = false, onChangeErrors }) => {
  const {
    value: inputValue,
    isValid: inputIsValid,
    hasError,
    inputHasError,
    errorMessage,
    valueChangeHandler: inputChangeHandler,
    inputblurHandler,
    reset: resetInput,
  } = useInput(validators);


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
        onBlur={inputblurHandler}
      />
      <label className={classes["unit"]} htmlFor={"tradeForm" + name.en}>
        {unit.fa}
      </label>
    </div>
  );
};

export default InputBox;
