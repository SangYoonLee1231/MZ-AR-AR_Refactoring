import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Nav from '../../components/Nav.jsx';
import "./EventPage.scss";

const event = () => {
  return (
    <div>
      <div className="header-style">
        <img
          src="/images/lottelogo.svg"
          alt="LotteLogo"
        />
        <div className="bunddang">
          <img
            src="/images/bunddang.svg"
            alt="bunddangAR"
          />
        </div>
      </div>
      <div className="center">
        <div className="SizedBox"></div>

        <Link to="/m">
          <button className="game-button">B 사이트 연동하고 상품권 받으러 가기</button>
        </Link>

        <div className="SizedBox"></div>

        {
          [1, 2, 3, 4, 5].map(() => { return (<div className="ad-style"></div>) })
        }
      </div>
      <Nav />
    </div>
  );
};

export default event;