import React from "react";
import { Link } from "react-router-dom";

import classes from "./BuySellBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import useSetAssets from "../../hooks/use-set-assets";
import { useNotification } from "../../hooks/use-notification";

const BuySellBtn = ({
  formType,
  disabled,
  postFn = () => {
    return;
  },
}) => {
  const uid = useSelector((state) => state.auth.uid);

  const dispatch = useDispatch();
  const { addNote } = useNotification();

  const {
    current_price,
    pairs,
    tradeForm: inputsData,
    order_type,
  } = useSelector((state) => state.tradingData);

  const changeAssetMutation = useSetAssets();

  const btnClickHandler = (e) => {
    e.preventDefault();
    if (disabled) {
      return;
    }
    changeAssetMutation
      .mutateAsync({
        pair: pairs,
        formType,
        inputs: {
          price:
            order_type === "MARKET"
              ? { value: current_price }
              : inputsData[formType].price,
          amount: inputsData[formType].amount,
        },
      })
      .then(() => {
        addNote({
          type: "SUCCESS",
          message: "معامله انجام شد",
        });
        postFn();
      })
      .catch(() => {
        addNote({
          type: "ERROR",
          message: "معامله انجام نشد",
        });
      });
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
      className={`${classes["buy-sell-btn"]} ${classes[formType]}`}
      disabled={disabled || changeAssetMutation.isLoading}
    >
      {changeAssetMutation.isLoading
        ? "در حال ارسال..."
        : formType === "buy"
        ? "خرید"
        : "فروش"}
    </button>
  );
};

export default BuySellBtn;
