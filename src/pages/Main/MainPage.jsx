import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Component,
} from "react-router-dom";
import "./MainPage.scss";
import Nav from "../../components/Nav.jsx";
import Header from "../../components/header.jsx";
import ImageSlider from "./imageSlider.jsx";

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {
  return (
    <div className="main-body">
      <Header />
      <div className="banner">
        <div className="banner-font-style">
          <a className="fontColor">MZ</a>
          <a style={{ color: "white", fontSize: 30 }}>를 잘</a>
          <a className="fontColor">AR</a>
          <a style={{ color: "white", fontSize: 30 }}>니깐!</a>
        </div>
        <div className="banner-ment-style">
          <a style={{ color: "white", fontSize: 40 }}>지금 분당점은?</a>
          <div className="SizedBox"></div>
          <div className="banner-mzarar-style">
            <a style={{ color: "black", fontSize: 50 }}>MZ-AR-AR</a>
          </div>
        </div>
      </div>

      <div className="center">
        <div className="SizedBox"></div>
        <div className="horiz-style">
          <Link to="/f">
            <button className="button-horiz">로그인</button>
          </Link>
          <div className="SizedBox"></div>
        </div>
        <ImageSlider />
        <div className="center">
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
          <a>아무내용</a>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Main;
