import React, { useEffect, useRef } from "react";
import WhiteFrame from "../ui/WhiteFrame";
import CurrenciesTable from "../component/CurrenciesTable";

import classes from "./CurrenciesList.module.css";
import { useInfiniteQuery } from "react-query";
import { getPaginatedCurrency } from "../util/get-currencies";
import RouterLoading from "../ui/RouterLoading";
import ErrorElement from "../component/error-element-comp/ErrorElement";
import useVisibilityStatus from "../hooks/use-element-visibility";
import { ReactComponent as LoadingSVG } from "../files/icons/refresh_FILL0_wght400_GRAD0_opsz24.svg";

const CurrenciesList = () => {
  const currenciesQuery = useInfiniteQuery({
    queryKey: ["currencies", "infinite"],
    getNextPageParam: (prevDate) => prevDate.nextPage,
    queryFn: ({ pageParam = 1 }) => getPaginatedCurrency(pageParam),
    retry: 1,
  });

  const tableContainerRef = useRef();

  const { seen, setSeen } = useVisibilityStatus(tableContainerRef, {
    visibilityThreshold: 1,
    depthLevel: 1,
  });

  useEffect(() => {
    if (seen && !currenciesQuery.isError) {
      /* If we do not apply the error condition,
      in case of error a new request will be sent with each time of scrolling .*/
      currenciesQuery.fetchNextPage().then(() => {
        setSeen(false);
      });
    }
  }, [seen, currenciesQuery.data]);


  if (currenciesQuery.isLoading) return <RouterLoading />;


  return (
    <div className={`${classes["CurrenciesList"]}`}>
      <div className={`${classes["intro"]}`}>
        <h1>
          شما در <span>ایزی‌بیت</span> به بزرگ‌ترین مجموعه ارز های دیجیتال
          دسترسی دارید
        </h1>
        <p>
          در صرافی امن و معتبر ایزی بیت، شما قادر خواهید بود در کمترین زمان
          ممکن، به معاملات خرید و فروش بیش از ۳۰۰ نوع ارز دیجیتال مختلف
          بپردازید. با استفاده از سیستم تبدیل ما، شما تجربه ای لذت بخش و بی نظیر
          از خرید انواع ارزهای دیجیتال محبوب و پرطرفدار مانند بیت کوین، اتریوم،
          تتر و حتی ارزهای دیجیتال متنوع دیگر را خواهید داشت. این ارزهای دیجیتال
          شامل فن توکن ها، ارزهای متاورسی، ان اف تی و ... می باشند. با ما همراه
          باشید و از خدمات ما در زمینه ارزهای دیجیتال بهره مند شوید.
        </p>
      </div>
      <div className={classes["currencies-table"]}>
        <WhiteFrame className="home-page-table">
          <div
            className={`${classes["table-container"]}`}
            ref={tableContainerRef}
          >
            <CurrenciesTable queryData={currenciesQuery} />

            {currenciesQuery.isFetchingNextPage && (
              <div className={`${classes["loading-new-items"]}`}>
                <LoadingSVG />
              </div>
            )}

            {currenciesQuery.isError &&
              currenciesQuery.data &&
              !currenciesQuery.isFetchingNextPage && ( // Render error message here
                <div
                  onClick={() => currenciesQuery.fetchNextPage()}
                  className={`${classes["refresh-btn"]}`}
                >
                  <LoadingSVG />
                </div>
              )}
          </div>
        </WhiteFrame>
      </div>
    </div>
  );
};

export default CurrenciesList;
