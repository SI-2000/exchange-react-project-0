import { json } from "react-router-dom";
import { currenciesData, depthArr, tradesArr } from "./data/currencies-data";
import axios from "../api/axios";

async function getTradingInfo(uid, currency) {
  // const [depthRes, tradesRes, coinInfoRes] = await Promise.all([
  //   axios.get("depth"),
  //   axios.get("trades?_limit=13"),
  //   axios.get("coin_info")
  // ]);

  const depth = depthArr[Math.floor(Math.random() * depthArr.length)];
  const trades = tradesArr[Math.floor(Math.random() * tradesArr.length)];

  const currencies = currenciesData;

  const data = {
    depth,
    trades,
    // coinInfo: coinInfoRes.data,
    currencies,
  };
  return data;
}

export default getTradingInfo;
