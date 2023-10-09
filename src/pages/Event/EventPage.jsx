import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import "./EventPage.scss";
import Header from "../../components/header.jsx";

const event = () => {
  const eventList = [
    ["프라다 할인", "11.30"],
    ["~~ 할인", "11.30"],
    ["~~ 할인", "11.30"],
  ];

  return (
    <div>
      <Header />
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="center">
        <div className="event-page-phrase">
          <span>분당점만의</span>
          <span>이벤트들을 모아봤어요!</span>
        </div>
        <div className="SizedBox"></div>

        <Link to="/m">
          <button className="game-button">
            B 사이트 연동하고 상품권 받으러 가기
          </button>
        </Link>

        <div className="SizedBox"></div>
        <div className="SizedBox"></div>

        {eventList.map((eventInfo) => {
          return (
            <div className="ad-this-style">
              <span className="event-name">{eventInfo[0]}</span>
              <span>~{eventInfo[1]}</span>
            </div>
          );
        })}
      </div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <Nav />
    </div>
  );
};

export default event;
