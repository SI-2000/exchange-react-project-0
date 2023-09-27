import React from "react";
import { Link } from "react-router-dom";

import classes from "./CustomLink.module.css";

const CustomLink = ({ children, to, className }) => {
  return (
    <Link to={to} className={`${classes[className]} ${classes["link"]}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
