import { json } from "react-router-dom";
import { currenciesData } from "./data/currencies-data";
import axios from "../api/axios";

async function getTradingInfo(uid, currency) {
  const depthRes = await axios.get("depth");
  const tradesRes = await axios.get("trades?_limit=13");
  const coinInfoRes = await axios.get("coin_info");

  const currencies = currenciesData;

  const data = {
    depth: depthRes.data,
    trades: tradesRes.data,
    coinInfo: coinInfoRes.data,
    currencies,
  };
  return data;
}

export default getTradingInfo;
