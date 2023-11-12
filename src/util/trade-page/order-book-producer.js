import { roundTo } from "../round-number";

export function OBDataProducer(data) {
  const ratio = 0.05;

  function get_current_price(depth = data) {
    const bids = depth.bids;
    const asks = depth.asks;
    return (+bids[0][0] + +asks[0][0]) / 2;
  }

  const currentPrice = get_current_price();
  const buyOB_rows = [];
  const sellOB_rows = [];

  let buyVolumeStep = 0;
  let bidsIndex = 0;

  for (let i = 1; i <= 17; i++) {
    if (bidsIndex < data.bids.length) {
      let buyPriceStep = currentPrice - i * ratio;
      while (data.bids[bidsIndex][0] >= buyPriceStep) {
        buyVolumeStep = data.bids[bidsIndex][1];
        bidsIndex++;
      }
      buyOB_rows.push({ price: buyPriceStep, amount: buyVolumeStep });
      buyVolumeStep = 0;
    }
  }

  let sellVolumeStep = 0;
  let asksIndex = 0;

  for (let i = 1; i <= 17; i++) {
    if (asksIndex < data.asks.length) {
      let sellPriceStep = currentPrice + i * ratio;
      while (data.asks[asksIndex][0] <= sellPriceStep) {
        sellVolumeStep = data.asks[asksIndex][1];
        asksIndex++;
      }
      sellOB_rows.push({ price: sellPriceStep, amount: sellVolumeStep });
      sellVolumeStep = 0;
    }
  }

  const allOrdersVolume = [];

  const buyOBData = buyOB_rows.map((buyOrder) => {
    allOrdersVolume.push(+buyOrder.amount);
    return {
      price: roundTo(buyOrder.price, 2),
      amount: roundTo(buyOrder.amount, 5),
      total: roundTo(buyOrder.price * buyOrder.amount, 5),
    };
  });

  const sellOBData = sellOB_rows.map((sellOrder) => {
    allOrdersVolume.push(+sellOrder.amount);
    return {
      price: roundTo(sellOrder.price, 2),
      amount: roundTo(sellOrder.amount, 5),
      total: roundTo(sellOrder.price * sellOrder.amount, 5),
    };
  });

  const maxVolume = Math.max(...allOrdersVolume);
  const minVolume = Math.min(...allOrdersVolume);

  const volumeBar = { sell: [], buy: [] };

  volumeBar.sell = sellOB_rows.map((row) => {
    return ((row.amount - minVolume) / (maxVolume - minVolume)) * 95 + 5;
  });
  volumeBar.buy = buyOB_rows.map((row) => {
    return ((row.amount - minVolume) / (maxVolume - minVolume)) * 95 + 5;
  });

  const btnClasses = { col1: [], col2: [], col3: [] };

  const marketPrice = roundTo(currentPrice, 2);

  return [sellOBData, buyOBData, volumeBar, marketPrice];
}
