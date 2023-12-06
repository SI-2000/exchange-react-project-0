import { useState } from "react";

export default function useInput({
  valueValidator,
  valueModifier = (val) => {
    return val;
  },
  initialInputValue = "",
  useInternalValueState = true,
  externalState: { value, valueUpdateFn },
}) {
  const [enteredValue, setEnteredValue] = useState(initialInputValue);
  const [isTouched, setIsTouched] = useState(false);

  const inputValue = useInternalValueState ? enteredValue : value;
  const inputValueUpdater = useInternalValueState
    ? setEnteredValue
    : valueUpdateFn;

  const modifiedValue = valueModifier(inputValue);
  const valueIsValid = valueValidator(modifiedValue).isValid;
  if (!valueIsValid && isTouched) {
    console.log(valueValidator(modifiedValue).errorMessage);
  }
  const errorMessage =
    !valueIsValid && isTouched
      ? valueValidator(modifiedValue).errorMessage
      : "";

  const inputHasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    const modifiedValue = valueModifier(event.target.value);
    const newValueIsValid = valueValidator(modifiedValue).isValid;
    if (newValueIsValid) {
      inputValueUpdater(modifiedValue);
    } else if (modifiedValue === "") {
      inputValueUpdater(modifiedValue);
    }
  };

  const inputblurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    inputValueUpdater("");
    setIsTouched(false);
  };

  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError: inputHasError,
    errorMessage,
    valueChangeHandler,
    inputblurHandler,
    isTouched,
    reset,
  };
}
