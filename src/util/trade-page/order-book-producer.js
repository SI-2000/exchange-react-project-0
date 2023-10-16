import { roundTo } from "../round-number";

export function OBDataProducer(
  config = {
    volume: { min: 0, max: 12 },
    price: { value: "4354363", step: 1 },
    rows_num: 15,
  }
) {
  const { volume, price, rows_num } = config;
  const volumeInfo = {
    amount: { sell: [], buy: [] },
    percentage: { sell: [], buy: [] },
  };

  for (let i = 0; i < rows_num; i++) {
    const sellRandomVolume =
      Math.random() * (volume.max - volume.min) + volume.min;
    const buyRandomVolume =
      Math.random() * (volume.max - volume.min) + volume.min;

    volumeInfo.amount.sell.push(sellRandomVolume);
    volumeInfo.amount.buy.push(buyRandomVolume);
  }

  const allSellVolumes = [...volumeInfo.amount.sell, ...volumeInfo.amount.buy];

  const maxVolume = Math.max(...allSellVolumes);
  const minVolume = Math.min(...allSellVolumes);

  for (let i = 0; i < rows_num; i++) {
    const sellP =
      ((volumeInfo.amount.sell[i] - minVolume) / (maxVolume - minVolume)) * 95 +
      5;
    volumeInfo.percentage.sell[i] = sellP;
    const buyP =
      ((volumeInfo.amount.buy[i] - minVolume) / (maxVolume - minVolume)) * 95 +
      5;
    volumeInfo.percentage.buy[i] = buyP;
  }

  const sellOBData = [];
  for (let i = 0; i < rows_num; i++) {
    const sellRowPrice = roundTo(+price.value + +price.step * i, 2);
    const sellRowVolume = roundTo(volumeInfo.amount.sell[i], 2);
    const sellRowTotal = roundTo(sellRowPrice * sellRowVolume, 2);
    sellOBData.push({
      price: sellRowPrice,
      amount: sellRowVolume,
      total: sellRowTotal,
    });
  }

  const buyOBData = [];
  for (let i = 0; i < rows_num; i++) {
    const buyRowPrice = roundTo(+price.value - +price.step * i, 2);
    const buyRowVolume = roundTo(volumeInfo.amount.buy[i], 2);
    const buyRowTotal = roundTo(buyRowPrice * buyRowVolume, 2);

    buyOBData.push({
      price: buyRowPrice,
      amount: buyRowVolume,
      total: buyRowTotal,
    });
  }

  const btnClasses = { col1: [], col2: [], col3: [] };

  return [sellOBData, buyOBData, volumeInfo.percentage, btnClasses];
}
