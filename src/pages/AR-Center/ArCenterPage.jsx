import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import "./ArCenterPage.scss";
import Header from "../../components/header.jsx";

const A = () => {
  return (
    <div>
      <Header />
      <div className="SizedBox"></div>
      <div className="center">
        <div className="horiz-style">
          <div className="bigButton-style">
            <Link to="/j">
              <button className="full-button-vertical-left">
                <div className="lefted-font">
                  <span className="big-font">AR로</span>
                  <span className="big-font">제품 착용해보기</span>
                  <div className="SizedBox"></div>
                  <span>진열돼있지 않은 상품도</span>
                  <span>상품도</span>
                  <div className="SizedBox"></div>
                  <span>지금 바로</span>
                  <span>착용 가능해요</span>
                </div>
                <div className="button-icon">
                  <img src="/images/watch-icon.png" width="100px" />
                </div>
              </button>
            </Link>
          </div>
          <div className="bigButton-style">
            <Link to="/c">
              <button className="full-button-vertical-right">
                <div className="righted-font">
                  <span className="big-font">AR 트릭아트</span>
                  <span className="big-font">사진찍기</span>
                  <div className="SizedBox"></div>
                  <span>포토존을 찾아</span>
                  <div className="SizedBox"></div>
                  <span>독특한 사진을</span>
                  <span>찍어보세요</span>
                </div>
                <div className="button-icon">
                  <img src="/images/camera-icon.png" width="115px" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="horiz-bigButton-style">
          <Link to="/i">
            <button className="full-button-horiz">
              <div className="lefted-font">
                <span className="big-font">AR 트릭아트 사진 대전</span>
                <div className="SizedBox"></div>
                <span>사진을 공개하고 좋아요를 받아보세요.</span>
                <span>특별한 선물이 준비돼있어요.</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>

      <Nav />
    </div>
  );
};

export default A;
