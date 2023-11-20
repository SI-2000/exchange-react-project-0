import React from "react";
import { Link } from "react-router-dom";

import classes from "./BuySellBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import useSetAssets from "../../hooks/use-set-assets";
import { useTradeForm } from "../../hooks/use-trade-form";
import { tradingActions } from "../../store/trading-data";

const BuySellBtn = ({ formType, disabled, onMouseOver }) => {
  const uid = useSelector((state) => state.auth.uid);

  const dispatch = useDispatch();

  const {
    current_price,
    tradeForm: inputsData,
    order_type,
  } = useSelector((state) => state.tradingData);

  const changeAssetMutation = useSetAssets();
  const btnClickHandler = (e) => {
    e.preventDefault();
    if (disabled) {
      return;
    }
    changeAssetMutation.mutate({
      pair: inputsData.pair,
      formType,
      inputs: {
        price:
          order_type === "MARKET" ? current_price : inputsData[formType].price,
        amount: inputsData[formType].amount,
      },
    });

    // doTrade(
    //   {
    //     pair:inputsData.pair,
    //     formType,
    //     inputs:{
    //       price:inputsData[formType].price,
    //       amount:inputsData[formType].amount,
    //     }
    //   }
    // )
  };


  if (!uid) {
    return (
      <div
        className={`${classes["buy-sell-btn"]} ${classes["auth-links-container"]}`}
      >
        <span>
          <Link to="/auth/?mode=login">وارد شوید</Link> یا{" "}
          <Link to="/auth/?mode=signup">حالا ثبت نام کنید</Link>
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={btnClickHandler}
      onMouseOver={onMouseOver}
      className={`${classes["buy-sell-btn"]} ${classes[formType]}`}
      disabled={disabled}
    >
      {formType === "خرید" ? "خرید" : "فروش"}
    </button>
  );
};

export default BuySellBtn;
