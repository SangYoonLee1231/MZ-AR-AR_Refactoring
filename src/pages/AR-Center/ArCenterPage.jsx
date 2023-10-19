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
            <Link to="/ar-product-number">
              <button className="full-button-vertical-left">
                <div className="lefted-font">
                  <span className="big-font">AR로</span>
                  <span className="big-font">제품</span>
                  <span className="big-font">착용해보기</span>
                  <div className="SizedBox"></div>
                  <span>진열돼있지 않은</span>
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
            <Link to="/camera-user">
              <button className="full-button-vertical-right">
                <div className="righted-font">
                  <span className="big-font">AR</span>
                  <span className="big-font">제품 검색</span>
                  {/* <span className="big-font">사진찍기</span> */}
                  <div className="SizedBox"></div>
                  <span>원하는 제품의</span>
                  <div className="SizedBox"></div>
                  <span>제품 번호를</span>
                  <span>찾아보세요</span>
                </div>
                <div className="button-icon">
                  <img src="/images/camera-icon.png" width="115px" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="horiz-bigButton-style">
          <Link to="/contest">
            <button className="full-button-horiz">
              <div className="lefted-font">
                <span className="big-font">AR 착용 사진 대전</span>
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
