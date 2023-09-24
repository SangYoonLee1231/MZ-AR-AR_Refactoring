import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './MainPage.scss';
import Nav from '../../components/Nav.jsx';
import LogIn from '../Login/LoginPage.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import Camera from '../Camera/Camera.jsx';
import Camera_User from '../Camera_User/Camera_User.jsx';
import LogIn_noMember from '../LogIn_noMember/LogIn_noMember.jsx';


//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {
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
      <div className="banner">
        <div className="banner-font-style">
          <a className="fontColor">MZ</a>
          <a style={{ color: 'white', fontSize: 30 }}>를 잘</a>
          <a className="fontColor">AR</a>
          <a style={{ color: 'white', fontSize: 30 }}>니깐!</a>
        </div>
        <div className="banner-ment-style">
          <a style={{ color: 'white', fontSize: 40 }}>지금 분당점은?</a>
          <div className="SizedBox"></div>
          <div className="banner-mzarar-style">
            <a style={{ color: 'black', fontSize: 50 }}>MZ-AR-AR</a>
          </div>
        </div>
      </div>

      <h1>여기가 메인 화면~</h1>
      <Link to="/f">
        <button>로그인 페이지로 이동하기</button>
      </Link>
      <Link to="/g">
        <button>회원가입 페이지로 이동하기</button>
      </Link>
      <Link to="/h">
        <button>비회원 로그인 페이지로 이동하기</button>
      </Link>
      <Nav />
    </div>
  );
};

export default Main;