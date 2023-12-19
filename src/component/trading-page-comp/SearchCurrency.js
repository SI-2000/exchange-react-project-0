import React, { useState } from "react";
import CustomTable from "../CustomTable";

import classes from "./SearchCurrency.module.css";
import { ReactComponent as SearchIcon } from "../../files/icons/search_FILL0_wght400_GRAD0_opsz24.svg";
import { useNavigate } from "react-router-dom";

const SearchCurrency = ({ className, header_titles, buttons }) => {
  const [filteredButtns, setFilteredButtns] = useState(buttons);
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setFilteredButtns(buttons);
    } else {
      setFilteredButtns(
        buttons.filter((btn) => {
          return btn.pairs.toLowerCase().includes(inputValue.toLowerCase());
        })
      );
    }
    return null;
  };

  const navigateToOtherPairs = (pairs) => {
    navigate(`/coins/${pairs}`);
  };

  return (
    <div className={`${classes["search-currency"]} ${classes[className]}`}>
      <form>
        <input
          type="text"
          onChange={changeInputHandler}
          placeholder="Enter pairs..."
        />
        <button className={classes["search-btn"]}>
          <SearchIcon />
        </button>
      </form>
      <div className={classes["table-wrapper"]}>
        <CustomTable
          className="search-cuurency"
          header_titles={header_titles}
          buttons={filteredButtns}
          btnClickHandler={navigateToOtherPairs}
        />
      </div>
      {filteredButtns.length === 0 && (
        <p className={classes["search-meassage"]}>
          ارز مورد نظر شما وجود ندارد.
        </p>
      )}
    </div>
  );
};

export default SearchCurrency;
