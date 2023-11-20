import { useDispatch, useSelector } from "react-redux";
import { tradingActions } from "../store/trading-data";
import useGetAssets from "./use-get-assets";

export function useTradeForm(inputsData, formType, orderType, current_price) {
  const uid = useSelector((state) => state.auth.uid);

  const assets = useGetAssets();

  const { tether, [inputsData.pair]: pair = 0 } = assets.data;

  const { stop, price, amount } = inputsData[formType];

  let formIsValid = false;
  let formErrMes = [];

  switch (orderType.state) {
    case "LIMIT": {
      let condition1 = price.isValid && amount.isValid;
      let condition2 = true;
      if (uid) {
        if (formType === "buy") {
          if (+price.value * +amount.value > tether) {
            formErrMes.push("موجودی شما برای این معامله کافی نیست.");
            condition2 = false;
          }
        } else if (formType === "sell") {
          if (+amount.value > pair) {
            formErrMes.push("موجودی شما برای این معامله کافی نیست.");
            condition2 = false;
          }
        }
      } else {
        condition2 = true;
      }
      formIsValid = condition1 && condition2;
      break;
    }
    case "MARKET": {
      let condition1 = amount.isValid;
      let condition2 = true;
      if (uid) {
        if (formType === "buy") {
          if (+current_price * +amount.value > tether) {
            formErrMes.push("موجودی شما برای این معامله کافی نیست.");
            condition2 = false;
          }
        } else if (formType === "sell") {
          if (+amount.value > pair) {
            formErrMes.push("موجودی شما برای این معامله کافی نیست.");
            condition2 = false;
          }
        }
      } else {
        condition2 = true;
      }
      formIsValid = condition1 && condition2;
      break;
    }
    case "stop.value_LIMIT": {
      let condition1 = stop.isValid && price.isValid && amount.isValid;
      let condition2 = true;
      let condition3 = true;

      if (uid) {
        if (formType === "buy") {
          if (+price.value * +amount.value > tether) {
            formErrMes.push("موجودی شما برای این معامله کافی نیست.");
            condition2 = false;
          }
        } else if (formType === "sell") {
          if (+amount.value > pair) {
            formErrMes.push("موجودی شما برای این معامله کافی نیست.");
            condition2 = false;
          }
        }
      } else {
        condition2 = true;
      }
      if (formType === "buy") {
        condition3 = +stop.value.value < +price.value.value;
        formErrMes.push("مقدار حد ضرر نمیتواند بالاتر از قیمت خرید باشد");
      } else if (formType === "sell") {
        condition3 = +stop.value.value > +price.value.value;
        formErrMes.push("مقدار حد ضرر نمیتواند پایین تر از قیمت فروش باشد");
      }
      formIsValid = condition1 && condition2 && condition3;
      break;
    }
  }
  return { formIsValid, formErrMes };
}
