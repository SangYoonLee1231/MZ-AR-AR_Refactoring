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
import Register from "./Register.jsx";
import Storytelling from "./Storytelling";

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {
  const nameUsername = localStorage.getItem("name-username");
  return (
    <div className="main-body">
      <Header />
      <div className="banner">
        <div className="banner-font-style">
          <span className="fontColor">MZ</span>
          <span style={{ color: "white" }}>를 잘</span>
          <span className="fontColor">AR</span>
          <span style={{ color: "white" }}>니깐!</span>
        </div>
        <div className="banner-ment-style-container">
          <div className="banner-ment-style">
            <span style={{ color: "white", fontSize: 35 }}>지금 분당점은?</span>
            {/* <div className="SizedBox"></div> */}
            <div className="banner-mzarar-style">
              <span style={{ color: "black", fontSize: 45, padding: 20 }}>
                MZ-AR-AR
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-innovation">
        <div className="banner-innovation-ment-style">
          <span>새롭게 탄생한 분당점의 혁신</span>
          <div className="banner-innovation-ment-style-2">
            <span className="banner-innovation-project">MZ-AR-AR</span>
            <span>이 함께합니다</span>
          </div>
        </div>
        <Link to="/ar-center-page">
          <button className="banner-innovation-ar-button">
            AR 센터 바로가기
          </button>
        </Link>
      </div>

      <div className="center">
        <div className="horiz-style">
        {
          !nameUsername && (
            <>
              <div className="SizedBox"></div>
              <Link to="/login-page">
                <Register />
              </Link>
              <div className="SizedBox"></div>
            </>
          )
        }
        </div>
        <ImageSlider />
        <Storytelling />

        <div className="center">
          <div className="SizedBox"></div>
          <div className="SizedBox"></div>
          <div className="SizedBox"></div>
          <div className="SizedBox"></div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Main;
