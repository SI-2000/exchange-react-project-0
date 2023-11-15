import React, { useEffect } from "react";

import useInput from "../../hooks/use-input";
import classes from "./InputBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { TradingActions } from "../../store/trading-data";

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
  const uid = useSelector((state) => state.auth.uid);
  console.log(uid)
  const inputIsDisabled = !uid || disabled;

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

  useEffect(() => {
    onChangeErrors((prev) => {
      const updatedKey = `${name.en}`;
      return { ...prev, [updatedKey]: errorMessage };
    });
  }, [errorMessage]);
  // const dispatch = useDispatch();

  // dispatch(
  //   TradingActions.updataBuyErrors({ formType: name.en, value: errorMessage })
  // );

  const errorM = useSelector((state) => state.tradingData.tradeFormErrors);

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
        value={value || inputValue}
        id={"tradeForm-" + name.en}
        name={name.en}
        type="text"
        autoComplete="off"
        disabled={inputIsDisabled}
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
