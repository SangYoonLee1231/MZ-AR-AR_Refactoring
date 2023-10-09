import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import "./EventPage.scss";
import Header from "../../components/header.jsx";

const event = () => {
  // [이미지, 이동할 링크 주소]
  const eventList = [
    ["", ""],
    ["", ""],
    ["", ""],
  ];

  const handleOnClick = (eventInfo) => {
    window.open(eventInfo[1], "이벤트 페이지");
  };

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
            <div
              className="ad-this-style"
              onClick={(eventInfo) => handleOnClick()}
            >
              <img src={eventInfo[0]} className="image-thumbnail" />
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
