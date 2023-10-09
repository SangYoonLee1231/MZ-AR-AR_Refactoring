import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import "./WillYouPost.scss";
import Header from "../../components/header.jsx";

const WillYouPost = () => {
  return (
    <div>
      <Header />
      <div className="SizedBox"></div>
      <div className="body">
        <div className="center">
          <div className="SizedBox"></div>
          <h1>
            <span className="bold">사진을 출품해보세요!</span>
          </h1>
          <div className="SizedBox"></div>
          <h1>
            <span className="bold">
              AR 트릭아트 사진 대전에 참가하시겠어요?
            </span>
          </h1>
          <div className="SizedBox"></div>
          <h1>
            <span className="bold">좋아요 순위</span>에 따라{" "}
            <span className="bold">롯데백화점 상품권</span>을 수여합니다!
          </h1>
          <div className="SizedBox"></div>
          <h1>순위에 들지 못해도 괜찮아요!</h1>
          <h1>
            순위에 없어도 <span className="bold">추첨</span>에 따라 월간
            지급까지!
          </h1>
          <div className="SizedBox"></div>

          <div className="button-area">
            <Link to="/l">
              <button className="button-style">
                <a>네. 참가할래요!</a>
              </button>
            </Link>
            <Link to="/a">
              <button className="button-style">
                <a>아니요. 괜찮아요.</a>
              </button>
            </Link>
            <div className="SizedBox"></div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default WillYouPost;
