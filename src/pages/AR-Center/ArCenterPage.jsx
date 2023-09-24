import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Nav from '../../components/Nav.jsx';
import LogIn from '../Login/LoginPage.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import Camera from '../Camera/Camera.jsx';
import Camera_User from '../Camera_User/Camera_User.jsx';
import LogIn_noMember from '../LogIn_noMember/LogIn_noMember.jsx';
import "./ArCenterPage.scss";

const A = () => {
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
        <h1>여기는 AR 서비스가 모여있는 화면A</h1>
        <div className="horiz-style">
          <Link to="/b">
            <button>AR 카메라로 이동하기</button>
          </Link>
          <Link to="/c">
            <button>도안 직접 업로드하기</button>
          </Link>
        </div>
        <Link to="/i">
          <button>AR 트릭아트 사진대전</button>
        </Link>
      </div>
      <Nav />
    </div>
  );
};

export default A;
