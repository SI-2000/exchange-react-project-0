import React from "react";
import CustomTable from "../CustomTable";

import classes from "./SearchCurrency.module.css";
import { ReactComponent as SearchIcon } from "../../files/icons/search_FILL0_wght400_GRAD0_opsz24.svg";

const SearchCurrency = ({ className, header_titles, buttons }) => {
  return (
    <div className={`${classes["search-currency"]} ${classes[className]}`}>
      <form>
        <input type="text" placeholder="Enter pairs..." />
        <button className={classes["search-btn"]}>
          <SearchIcon />
        </button>
      </form>
      <CustomTable
        className="search-cuurency"
        header_titles={header_titles}
        buttons={buttons}
      />
    </div>
  );
};

export default SearchCurrency;
