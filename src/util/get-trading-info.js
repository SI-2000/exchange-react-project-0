async function getTradingInfo(uid, currency) {
  const depthData = await fetch("http://localhost:8000/depth");
  const depth = await depthData.json();

  const tradesData = await fetch("http://localhost:8000/trades?_limit=13");
  const trades = await tradesData.json();

  const pairsListData = await fetch("http://localhost:8000/exchangeInfo");
  const pairsList = await pairsListData.json();

  const data = { depth, trades, pairsList };
  return data;
}

export default getTradingInfo;
