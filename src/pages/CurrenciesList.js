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
  });

  const tableContainerRef = useRef();

  const { seen, setSeen } = useVisibilityStatus(tableContainerRef);

  console.log(seen);

  useEffect(() => {
    if (seen) {
      currenciesQuery.fetchNextPage().then(() => {
        setSeen(false);
      });
    }
  }, [seen]);

  if (currenciesQuery.isLoading) return <RouterLoading />;
  if (currenciesQuery.isError) return console.log(currenciesQuery.error);

  return (
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
        </div>
      </WhiteFrame>
    </div>
  );
};

export default CurrenciesList;
