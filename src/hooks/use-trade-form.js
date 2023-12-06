import { useDispatch, useSelector } from "react-redux";
import { tradingActions } from "../store/trading-data";
import useGetAssets from "./use-get-assets";
import useInput from "./use-input";
import persianNumsToEnglish from "../util/persianNums-to-english";

const validator = (val) => {
  let regex = /^[0-9]+\.?[0-9]*$/;
  const condition1 = regex.test(val);

  const isValid = condition1;
  const errorMessage = isValid ? "543543" : "لطفا مقدار معتبر وارد کنید.";

  return {
    isValid,
    errorMessage,
  };
};

// const validators = [
//   (val) => {
//     var regex = /^[0-9]+\.?[0-9]*$/;
//     let isValid = regex.test(val);

//     const errorMessage = isValid ? "" : "لطفا مقدار معتبر وارد کنید.";
//     return {
//       isValid,
//       errorMessage,
//     };
//   },
//   (val) => {
//     const errorMessage =
//       "مقدار مشخص شده برای معامله بیشتر از موجودی حساب شما میباشد.";
//     return {
//       isValid: true,
//       errorMessage,
//     };
//   },
// ];

export function useTradeForm(formType, orderType) {
  const uid = useSelector((state) => state.auth.uid);
  const userAssets = useGetAssets();
  const dispatch = useDispatch();

  const { tradeForm: inputsData, current_price: currentPrice } = useSelector(
    (state) => state.tradingData
  );

  const inputsValue = inputsData[formType];

  const changeInputsValue = (value, inputName) => {
    dispatch(
      tradingActions.updateOneInput({
        formType,
        inputName,
        value: {
          value,
          isValid: true,
          isTouched: true,
        },
      })
    );
  };

  const stopInput = useInput({
    valueValidator: validator,
    valueModifier: persianNumsToEnglish,
    isUsingInternalState: false,
    externalState: {
      extValue: inputsValue.stop.value,
      extValueUpdateFn: (value) => {
        changeInputsValue(value, "stop");
      },
    },
  });

  const priceInput = useInput({
    valueValidator: validator,
    valueModifier: persianNumsToEnglish,
    isUsingInternalState: false,
    externalState: {
      extValue: inputsValue.price.value,
      extValueUpdateFn: (value) => {
        changeInputsValue(value, "price");
      },
    },
  });

  const amountInput = useInput({
    valueValidator: validator,
    valueModifier: persianNumsToEnglish,
    isUsingInternalState: false,
    externalState: {
      extValue: inputsValue.amount.value,
      extValueUpdateFn: (value) => {
        changeInputsValue(value, "amount");
      },
    },
  });

  let formIsValid = false;
  let formErrMessages = [];

  if (uid || userAssets.data) {
    const { tether, [inputsData.pair]: pair = 0 } = userAssets.data;
    const { stop, price, amount } = inputsData[formType];
    switch (orderType.state) {
      case "LIMIT": {
        let condition1 = price.isValid && amount.isValid;
        let condition2 = true;
        if (uid) {
          if (formType === "buy") {
            if (+price.value * +amount.value > tether) {
              formErrMessages.push("موجودی شما برای این معامله کافی نیست.");
              condition2 = false;
            }
          } else if (formType === "sell") {
            if (+amount.value > pair) {
              formErrMessages.push("موجودی شما برای این معامله کافی نیست.");
              condition2 = false;
            }
          }
        } else {
          condition2 = false;
        }
        formIsValid = condition1 && condition2;
        break;
      }
      case "MARKET": {
        let condition1 = amount.isValid;
        let condition2 = true;
        if (uid) {
          if (formType === "buy") {
            if (+currentPrice * +amount.value > tether) {
              formErrMessages.push("موجودی شما برای این معامله کافی نیست.");
              condition2 = false;
            }
          } else if (formType === "sell") {
            if (+amount.value > pair) {
              formErrMessages.push("موجودی شما برای این معامله کافی نیست.");
              condition2 = false;
            }
          }
        } else {
          condition2 = true;
        }
        formIsValid = condition1 && condition2;
        break;
      }
      case "STOP_LIMIT": {
        let condition1 = stop.isValid && price.isValid && amount.isValid;
        let condition2 = true;
        let condition3 = true;

        if (uid) {
          if (formType === "buy") {
            if (+price.value * +amount.value > tether) {
              formErrMessages.push("موجودی شما برای این معامله کافی نیست.");
              condition2 = false;
            } else {
              condition2 = true;
            }
          } else if (formType === "sell") {
            if (+amount.value > pair) {
              formErrMessages.push("موجودی شما برای این معامله کافی نیست.");
              condition2 = false;
            } else {
              condition2 = true;
            }
          }
        } else {
          condition2 = true;
        }
        const inputsAreNotEmpty = stop.value !== "" && price.value !== "";
        const inputsAreTouched = stop.isTouched && price.isTouched;

        if (formType === "buy" && (inputsAreNotEmpty || inputsAreTouched)) {
          condition3 = +stop.value <= +price.value;
          if (!condition3) {
            formErrMessages.push(
              "مقدار حد ضرر نمیتواند بالاتر از قیمت خرید باشد"
            );
          }
        } else if (
          formType === "sell" &&
          (inputsAreNotEmpty || inputsAreTouched)
        ) {
          condition3 = +stop.value >= +price.value;
          if (!condition3)
            formErrMessages.push(
              "مقدار حد ضرر نمیتواند پایین تر از قیمت فروش باشد"
            );
        }
        formIsValid = condition1 && condition2 && condition3;
        break;
      }
    }
  }

  const errorMessages = {
    stop: [stopInput.errorMessage],
    price: [orderType.state === "MARKET" ? "" : priceInput.errorMessage],
    amount: [amountInput.errorMessage],
    form: formErrMessages,
  };

  return { formIsValid, stopInput, priceInput, amountInput, errorMessages };
}
