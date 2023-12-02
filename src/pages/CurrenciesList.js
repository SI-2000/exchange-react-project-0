import React from "react";
import WhiteFrame from "../ui/WhiteFrame";
import CurrenciesTable from "../component/CurrenciesTable";

import classes from "./CurrenciesList.module.css";

const CurrenciesList = () => {
    const currencies = [
        { coinId: "bitcoin", fname: "بیت کوین" },
        { coinId: "ethereum", fname: "اتریوم" },
        { coinId: "cardano", fname: "کاردانو" },
        { coinId: "binancecoin", fname: "بایننس کوین" },
        { coinId: "tether", fname: "تتر" },
        { coinId: "usd-coin", fname: "یواس‌دی کوین" },
        { coinId: "xrp", fname: "اکس‌آر‌پی" },
        { coinId: "polkadot", fname: "پولکادات" },
        { coinId: "litecoin", fname: "لایت‌کوین" },
        { coinId: "chainlink", fname: "چین‌لینک" },
        { coinId: "doge", fname: "دوج کوین" },
        { coinId: "uniswap", fname: "یونی‌سواپ" },
        { coinId: "solana", fname: "سولانا" },
        { coinId: "wrapped-bitcoin", fname: "بیت کوین بسته‌بندی‌شده" },
        { coinId: "avalanche-2", fname: "آوالانچ" },
        { coinId: "terra-luna", fname: "ترا لونا" },
        { coinId: "algorand", fname: "آلگورند" },
        { coinId: "cosmos", fname: "کاسموس" },
        { coinId: "vechain", fname: "ویچین" },
        { coinId: "matic-network", fname: "شبکه ماتیک" },
        { coinId:"aave",fname:"آئاو"},
        { coinId:"monero",fname:"مونرو"},
        { coinId:"eos",fname:"ای‌اُ اِس"},
        { coinId:"tron",fname:"ترون"},
        { coinId:"neo",fname:"نئو"},
        { coinId:"dash",fname:"دَش"},
      ];
      
      

  return (
    <div className={classes["currencies-table"]}>
      <WhiteFrame className="home-page-table">
        <CurrenciesTable currencies={currencies} />
      </WhiteFrame>
    </div>
  );
};

export default CurrenciesList;
