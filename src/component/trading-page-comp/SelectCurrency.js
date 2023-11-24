import React, { useState } from "react";
import ReactDOM from "react-dom";

import classes from "./SelectCurrency.module.css";
import Overlay from "../../ui/Overlay";
import { useDispatch, useSelector } from "react-redux";
import { searchPairsActions } from "../../store/search-pairs";
import SearchCurrency from "./SearchCurrency";
import { roundTo } from "../../util/round-number";

const SelectCurrency = ({ currencies, className }) => {
  const searchOverlayIsOpen = useSelector(
    (state) => state.searchOverlay.isOpened
  );
  const dispatch = useDispatch();

  const header_titles = [
    { en: "pairs", fa: "جفت ارز" },
    { en: "price", fa: "قیمت" },
    { en: "change", fa: "تغییر" },
  ];

  const buttons = currencies.map((currency) => {
    return {
      pairs: currency.symbol.toUpperCase() + "USDT",
      price: roundTo(currency.current_price.toString(), 2),
      change:       roundTo(currency.price_change_percentage_24h.toString(), 2)
      ,
    };
  });

  // const buttons = [
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  //   { pairs: "BTC/USDT", price: "45656", change: "6563" },
  // ];

  return (
    <div className={classes["select-currency"]}>
      {ReactDOM.createPortal(
        <Overlay
          className="search-pairs-overlay"
          onClickBackdrop={() => {
            dispatch(searchPairsActions.close());
          }}
          overlayIsOpen={searchOverlayIsOpen}
        >
          <SearchCurrency header_titles={header_titles} buttons={buttons} />
        </Overlay>,
        document.getElementById("overlay")
      )}
      <SearchCurrency
        className="min-1030"
        header_titles={header_titles}
        buttons={buttons}
      />
    </div>
  );
};

export default SelectCurrency;
