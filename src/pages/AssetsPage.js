import React, { useEffect } from "react";
import classes from "./AssetsPage.module.css";
import WhiteFrame from "../ui/WhiteFrame";
import { formatPrice } from "../util/format-price";
import AssetItem from "../component/AssetItem";
import tableClasses from "../component/assestTable.module.css";
import AssetsTable from "../component/AssetsTable";
import { useQuery } from "react-query";
import useGetAssets from "../hooks/use-get-assets";
import { getCurrenciesInfo } from "../util/get-currencies";
import { roundTo } from "../util/round-number";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RouterLoading from "../ui/RouterLoading";

const AssetsPage = () => {
  const uid = useSelector((state) => state.auth.uid);

  const navigate = useNavigate();

  useEffect(() => {
    if (!uid) {
      navigate("/auth/?mode=login");
    }
  }, [uid]);

  const currenciesQuery = useQuery({
    queryKey: "currencies",
    queryFn: getCurrenciesInfo,
    staleTime: Infinity,
  });

  const assets = useGetAssets();

  if (!uid) {
    return (
      <div className={classes["assets-container"]}>
        <WhiteFrame>
          <p className={classes["auth-reminder"]}>
            شما هنوز وارد حساب کاربری خود نشده اید. لطفا پس از احراز هویت به این
            مسیر بازگردید.
          </p>
        </WhiteFrame>
      </div>
    );
  }

  if (assets.isLoading || currenciesQuery.isLoading) return <RouterLoading />;

  if (!assets.data || assets.isError || currenciesQuery.isError)
    return <p>{JSON.stringify(assets.error)}</p>;

  const assetsInfo = Object.keys(assets.data).map((assetItem) => {
    const itemInfo = currenciesQuery.data.find((currency) => {
      return currency.id === assetItem;
    });
    return {
      id: itemInfo.id,
      symbol: itemInfo.symbol,
      image: itemInfo.image,
      price: itemInfo.current_price,
      amount: assets.data[assetItem],
      total_value: itemInfo.current_price * assets.data[assetItem],
    };
  });

  const total_assets = assetsInfo.reduce((initialValue, assetItem) => {
    return initialValue + assetItem.total_value;
  }, 0);

  return (
    <div className={classes["assets-container"]}>
      <div className={classes["base-info"]}>
        <div className={classes["base-assets"]}>
          <h6>ارزش کل دارایی ها</h6>
          <h1>
            {formatPrice(roundTo(total_assets.toString(), 2))}
            <span> $</span>
          </h1>
        </div>
      </div>

      <WhiteFrame>
        <AssetsTable assetsInfo={assetsInfo} />
      </WhiteFrame>
    </div>
  );
};

export default AssetsPage;
