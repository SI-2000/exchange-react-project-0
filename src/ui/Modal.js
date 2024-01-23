import React, { useEffect, useState } from "react";

import classes from "./Modal.module.css";
import Overlay from "./Overlay";
import CustomButton from "../component/CustomButton";
import { ReactComponent as CloseIcon } from "../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";
import axios from "axios";

const Modal = () => {
  const [chxIsChecked, setChxIsChecked] = useState(
    localStorage.getItem("showModal") === "1"
  );

  const [modalIsOpen, setModalIsOpen] = useState(!chxIsChecked);
  const [country, setCountry] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://ipapi.co/json/")
  //     .then((response) => {
  //       setCountry(response.data.country_name);
  //     })
  //     .catch((error) => {});
  // }, []);

  if (!modalIsOpen) return null;

  const modalIsClosedHandler = () => {
    setModalIsOpen(false);
  };

  const checkboxChangeHandler = () => {
    setChxIsChecked((prev) => {
      if (prev) localStorage.setItem("showModal", "0");
      else localStorage.setItem("showModal", "1");

      return !prev;
    });
  };

  return (
    <div className={`${classes["Modal"]}`}>
      <Overlay
        onClickBackdrop={modalIsClosedHandler}
        className="modal-overlay"
        overlayIsOpen={modalIsOpen}
      >
        <div className={`${classes["modal"]}`}>
          <div
            onClick={modalIsClosedHandler}
            className={`${classes["close-icon"]}`}
          >
            <CloseIcon />
          </div>
          {country === "Iran" && (
            <p
              style={{
                marginBottom: "2rem",
                backgroundColor: "white",
                padding: ".5rem",
                color: "var(--gold-color)",
                borderRadius: "10px",
              }}
            >
              شما با IP ایران به وبسایت متصل شده اید. توجه کنید که این سایت از
              سرویس Firebase استفاده میکند که تحت تحریم است و شما امکان استفاده
              از خدمات سایت را نخواهید داشت.
            </p>
          )}
          <p>
            این برنامه به دلیل نبود API مناسب برای تایید هویت و ذخیره داده های
            کاربر از دو سرویس Authentication و Realtime Database از وبسایت
            Firebase استفاده میکند. به دلیل این محدودیت در این پروژه،
            Authentication به طور استاندارد پیاده سازی نشده است.
          </p>
          <div className={`${classes["show-again"]}`}>
            <div
              style={
                chxIsChecked
                  ? {
                      backgroundColor: "rgb(0, 209, 0)",
                      border: "2px solid white",
                    }
                  : null
              }
              onClick={checkboxChangeHandler}
              id="show-again-cbx"
              className={`${classes["cbx"]}`}
            ></div>
            <label onClick={checkboxChangeHandler} htmlFor="show-again-cbx">
              دیگر نشان نده
            </label>
          </div>

          <button onClick={modalIsClosedHandler}>متوجه شدم</button>
        </div>
      </Overlay>
    </div>
  );
};

export default Modal;
