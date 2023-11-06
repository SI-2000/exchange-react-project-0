async function getTradingInfo(currency) {
  const depthData = await fetch("http://localhost:8000/depth");
  const depth = await depthData.json();

  const tradesData = await fetch("http://localhost:8000/trades");
  const trades = await tradesData.json();

  const data = { ...depth, ...trades };
  return data;
}

export default getTradingInfo;
