import { roundTo } from "../round-number";

export function tradesProducer(tradesData) {
  function timeFormater(time) {
    let date = new Date(time);
    let formattedTime = date.toLocaleTimeString("en-GB", { hour12: false });
    return formattedTime;
  }

  const tableData = tradesData.map((trade) => {
    return {
      price: roundTo(trade.price, 2),
      amount: roundTo(trade.qty, 5),
      time: timeFormater(trade.time),
    };
  });

  const btnClassNames = { col1: [], col2: [], col3: [] };

  btnClassNames.col1 = tradesData.map((trade) => {
    return trade.isBuyerMaker ? "positive" : "negative";
  });

  return [tableData, btnClassNames];
}
