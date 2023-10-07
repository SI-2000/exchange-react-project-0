import React from "react";
import WhiteFrame from "../ui/WhiteFrame";

import classes from "./UnimportantPage.module.css";

const UnimportantPage = () => {
  return (
    <div className={classes["unimportant"]}>
      <WhiteFrame>
        <p>
          مسیری که وارد آن شده اید صرفا یک سری متن را به کاربر نمایش میدهد و
          این صفحه فاقد ارزش برنامه نویسی است. از این رو برای توسعه آن زمان صرف
          نشده است.
        </p>
      </WhiteFrame>
    </div>
  );
};

export default UnimportantPage;
