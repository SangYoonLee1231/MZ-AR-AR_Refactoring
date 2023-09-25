import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Nav from '../../components/Nav.jsx';
import "./ArCenterPage.scss";
import Header from '../../components/header.jsx';

const A = () => {
  return (
    <div>
      <Header />
      <div className="center">

        <div className="horiz-style">
          <div className="bigButton-style">
            <Link to="/j">
              <button className="full-button-vertical">
                <div className="center">
                  <div className="lefted-font">
                    <a className="big-font">AR로</a>
                    <a className="big-font">제품 착용하기</a>
                    <div className="SizedBox"></div>
                    <a>진열돼있지 않은 상품도</a>
                    <a>착용해보세요.</a>
                  </div>
                </div>
              </button>
            </Link>
          </div>
          <div className="bigButton-style">
            <Link to="/c">
              <button className="full-button-vertical">
                <div className="lefted-font">
                  <a className="big-font">AR 트릭아트</a>
                  <a className="big-font">사진찍기</a>
                  <div className="SizedBox"></div>
                  <a>포토존을 찾아</a>
                  <a>독특한 사진을 찍어보세요.</a>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="horiz-bigButton-style">
          <Link to="/i">
            <button className="full-button-horiz">
              <div className="lefted-font">
                <a className="big-font">AR 트릭아트 사진 대전</a>
                <div className="SizedBox"></div>
                <a>사진을 공개하고 좋아요를 받아보세요.</a>
                <a>특별한 선물이 준비돼있어요.</a>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default A;
