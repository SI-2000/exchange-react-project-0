import { json } from "react-router-dom";
import { currenciesData } from "./data/currencies-data";

async function getTradingInfo(uid, currency) {
  const depthData = await fetch("http://localhost:8000/depth");
  const depth = await depthData.json();

  const tradesData = await fetch("http://localhost:8000/trades?_limit=13");
  const trades = await tradesData.json();

  const coinInfoData = await fetch("http://localhost:8000/coin_info");
  const coinInfo = await coinInfoData.json();

  const currencies = currenciesData;

  const data = { depth, trades, coinInfo, currencies };
  return data;
}

export default getTradingInfo;
