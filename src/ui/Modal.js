import React from "react";

import classes from "./Modal.module.css";
import Overlay from "./Overlay";
import CustomButton from "../component/CustomButton";
import { ReactComponent as CloseIcon } from "../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

const Modal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const modalIsClosedHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${classes["Modal"]}`}>
      <Overlay
        onClickBackdrop={modalIsClosedHandler}
        className="modal-overlay"
        overlayIsOpen={isOpen}
      >
        <div className={`${classes["modal"]}`}>
          <div
            onClick={modalIsClosedHandler}
            className={`${classes["close-icon"]}`}
          >
            <CloseIcon />
          </div>
          <p>
            این برنامه به دلیل نبود API مناسب برای تایید هویت و ذخیره داده های
            کاربر از دو سرویس Authentication و Realtime Database از وبسایت
            Firebase استفاده میکند. به دلیل این محدودیت در این پروژه،
            Authentication به طور استاندارد پیاده سازی نشده است.
          </p>
          <button onClick={modalIsClosedHandler}>متوجه شدم</button>
        </div>
      </Overlay>
    </div>
  );
};

export default Modal;
