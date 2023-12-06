import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./PopUps.module.css";
import { ReactComponent as CloseIcon } from "../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

const PopUpElement = ({ children, id, className, onLifeTimeOver }) => {
  const [isAlive, setIsAlive] = useState(true);

  useEffect(() => {
    const lifeTime = setTimeout(() => {
      setIsAlive(false);
      onLifeTimeOver(id);
    }, 4000);
    return () => {
      clearTimeout(lifeTime);
    };
  }, []);

  if (!isAlive) return null;

  return (
    <div className={`${classes["wrapper"]}`}>
      <div className={`${classes["popup-element"]} ${classes[className]}`}>
        <div className={`${classes["text"]}`}> {children}</div>
        <CloseIcon
          onClick={() => {
            onLifeTimeOver(id);
          }}
        />
      </div>
    </div>
  );
};

const PopUps = () => {
  const [popUpList, setPopUpList] = useState([]);

  const deleteMessageHandler = (id) => {
    setPopUpList((prevList) => {
      return prevList.filter((item, index) => {
        return id !== index;
      });
    });
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className={`${classes["pop-ups-container"]}`}>
          {popUpList.map((message, index) => {
            return (
              <PopUpElement
                key={index}
                id={index}
                className="positive-mes"
                onLifeTimeOver={deleteMessageHandler}
              >
                {message}
              </PopUpElement>
            );
          })}
        </div>,
        document.getElementById("pop-up")
      )}
    </>
  );
};

export default PopUps;
