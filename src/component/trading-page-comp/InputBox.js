import React from "react";

import classes from "./InputBox.module.css";
import { useSelector } from "react-redux";


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

const InputBox = ({
  value,
  isValid,
  onChange,
  onBlur,
  hasError,
  name,
  unit,
  disabled = false,
  formType,
}) => {
  const uid = useSelector((state) => state.auth.uid);

  const inputIsDisabled = !uid || disabled;

  return (
    <div
      className={`${classes["input-box"]} ${classes[name.en]}
       ${inputIsDisabled ? classes["disabled-inp-box"] : undefined} ${
        hasError && !inputIsDisabled && classes["inp-has-error"]
      }`}
    >
      <label htmlFor={"tradeForm-" + name.en} className={classes["title"]}>
        {name.fa}
      </label>
      <input
        value={value}
        id={"tradeForm-" + name.en}
        name={name.en}
        type="text"
        autoComplete="off"
        disabled={inputIsDisabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label className={classes["unit"]} htmlFor={"tradeForm" + name.en}>
        {unit.en === "USDT" ? "تتر" : "کوین"}
      </label>
    </div>
  );
};

export default InputBox;
