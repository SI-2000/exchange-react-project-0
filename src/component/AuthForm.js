import React from "react";
import {
  Form,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";
import WhiteFrame from "../ui/WhiteFrame";
import CustomButton from "./CustomButton";
import CustomLink from "./CustomLink";
import { useSelector } from "react-redux";

const AuthForm = () => {
  const errData = useActionData();
  const navigaton = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmiting = navigaton.state === "submitting";

  const uid = useSelector((state) => state.uid);

  return (
    <div className={classes["form-container"]}>
      <WhiteFrame>
        <Form method="post">
          <h1 className={classes["form-caption"]}>
            {isLogin ? "ورود" : "ثبت نام"}
          </h1>
          <div className={classes["err-message"]}>
            {errData && <p>{errData}</p>}
          </div>
          <p>
            <label htmlFor="email">ایمیل</label>
            <input
              className={classes["ltr"]}
              type="text"
              id="email"
              name="email"
              autoComplete="off"
            />
          </p>
          <p>
            <label>
              {isLogin
                ? "رمز خود را وارد کنید"
                : "یک رمز دلخواه برای حساب خود انتخاب کنید"}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              className={classes["ltr"]}
            />
          </p>

          <div className={classes["buttons"]}>
            <CustomLink
              to={`?mode=${isLogin ? "signup" : "login"}`}
              className="dark"
            >
              {isLogin ? "حساب جدیدی بسازید" : "حسابی دارید؟ وارد شوید"}
            </CustomLink>
            <CustomButton className="dark" disabled={isSubmiting}>
              {isSubmiting ? "در حال ارسال" : isLogin ? "ورود" : "ارسال"}
            </CustomButton>
          </div>
        </Form>
      </WhiteFrame>
    </div>
  );
};

export default AuthForm;
