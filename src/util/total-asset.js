import { useSelector } from "react-redux";

export default function totalAssetCal() {
  const assets = useSelector((state) => state.assets.assets);
  const assetValues = assets.value();
  const assetSum = assetValues.reduce((val) => {
    return sum + +val;
  }, sum);
  return assetSum;
}
