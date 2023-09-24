import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Nav from '../../components/Nav.jsx';
import LogIn from '../Login/LoginPage.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import Camera from '../Camera/Camera.jsx';
import Camera_User from '../Camera_User/Camera_User.jsx';
import LogIn_noMember from '../LogIn_noMember/LogIn_noMember.jsx';
import "./EventPage.scss";

const event = () => {
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
        <div className="SizedBox"></div>
        <h1>여기는 이벤트 페이지 !!</h1>
        <div className="SizedBox"></div>

        <button
          onClick={null}
        >
          B 사이트 연동하고 포인트 상품권으로 교환하기
        </button>

        <div className="SizedBox"></div>

        {
          [1, 2, 3, 4, 5].map(() => { return (<div className="ad-style"></div>) })
        }
      </div>
      <Nav />
    </div>
  );
};

export default event;