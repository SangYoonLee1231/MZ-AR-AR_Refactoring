import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Component,
} from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <Link to="/">
      <div className="header-style">
        <div className="logo-image">
          <img
            src="/images/lottelogo.svg"
            alt="LotteLogo"
            className="responsive-image-1"
          />
        </div>
        <div className="bunddang">
          <img
            src="/images/bunddang.svg"
            alt="bunddangAR"
            className="responsive-image-2"
          />
        </div>
      </div>
    </Link>
  );
};

export default Header;
