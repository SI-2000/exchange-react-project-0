import React, { useEffect } from "react";
import classes from "./AssetsPage.module.css";
import WhiteFrame from "../ui/WhiteFrame";
import AssetItem from "../component/AssetItem";
import tableClasses from "../component/assestTable.module.css";
import AssetsTable from "../component/AssetsTable";
import { useQuery } from '@tanstack/react-query'
import useGetAssets from "../hooks/use-get-assets";
import { getCurrenciesInfo } from "../util/get-currencies";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RouterLoading from "../ui/RouterLoading";
import ModifyTetherAmount from "../component/assets-page-comp/ModifyTetherAmount";
import TotalAssetAmount from "../component/assets-page-comp/TotalAssetAmount";
import ErrorElement from "../component/error-element-comp/ErrorElement";

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


  if (assets.isLoading || currenciesQuery.isLoading )
    return <RouterLoading />;

  if (assets.isError || currenciesQuery.isError)
    return <ErrorElement err={assets.error} />;


  const assetsInfo = Object.keys(assets.data).map((assetItem) => {
    const itemInfo = currenciesQuery.data.find((currency) => {
      if (currency.id === "tether") {
        return currency.id === assetItem;
      } else {
        return currency.symbol.toUpperCase() + "USDT" === assetItem;
      }
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

  return (
    <div className={classes["assets-container"]}>
      <TotalAssetAmount assetsData={assetsInfo} />
      <ModifyTetherAmount />

      <WhiteFrame className="home-page-table">
        <AssetsTable assetsInfo={assetsInfo} />
      </WhiteFrame>
    </div>
  );
};

export default AssetsPage;
