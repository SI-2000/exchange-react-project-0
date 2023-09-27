import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import classes from "./CurrenciesTItem.module.css";

const CurrenciesTItem = ({ currencyInfo }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${currencyInfo.coinId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        const configuredData = {
          fname: currencyInfo.fname,
          symbol: data.symbol.toUpperCase(),
          img: data.image.small,
          price: data.market_data.current_price.usd
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          volume: data.market_data.total_volume.usd,
          change: data.market_data.price_change_percentage_24h.toFixed(2),
        };
        setData(configuredData);
      } catch (e) {
        console.log("error");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <tr>
          <td className={classes["name"]}>
            <img alt={currencyInfo.coinId} src={data.img} />
            <div className={classes["name-symbol"]}>
              <h3>{data.fname}</h3>
              <p>{data.symbol}</p>
            </div>
          </td>
          <td className={classes["price"]}>{data.price} $</td>
          <td
            className={`${classes["change"]} ${
              data.change >= 0 ? classes["increased"] : classes["decreased"]
            }`}
          >
            {data.change >= 0 && "+"}
            {data.change}%
          </td>
          <td className={classes["volume"]}>{data.volume}</td>
          <td className={classes["buy-sell-btn"]}>
            <Link>خرید و فروش</Link>
          </td>
        </tr>
      ) : (
        <p>اطلاعاتی پیدا نشد!</p>
      )}
    </>
  );
};

export default CurrenciesTItem;
