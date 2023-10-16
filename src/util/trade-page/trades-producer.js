import { roundTo } from "../round-number";

function getRandomOrderType() {
  return Math.random() < 0.5 ? "positive" : "negative";
}

function getTime() {
  let date = new Date();
  let time = date.toTimeString().split(" ")[0];
  return time;
}

export function tradesProducer(config) {
  const { price, row_num, maxV, minV } = config;

  const data = [];
  for (let i = 0; i < row_num; i++) {
    const randomAmount = Math.random() * (maxV - minV) + minV;

    data.push({
      price: price,
      amount: roundTo(randomAmount, 5),
      time: getTime(),
    });
  }

  const btnClassNames = { col1: [], col2: [], col3: [] };
  for (let i = 0; i < row_num; i++) {
    btnClassNames.col1.push(getRandomOrderType());
  }

  return [data, btnClassNames];
}
