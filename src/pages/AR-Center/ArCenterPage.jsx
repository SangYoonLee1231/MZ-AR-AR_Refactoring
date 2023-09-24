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
      <h1>여기는 AR 서비스가 모여있는 화면A</h1>
      <Link to="/b">
        <button>AR 카메라로 이동하기</button>
      </Link>
      <Link to="/c">
        <button>도안 직접 업로드하기</button>
      </Link>
      <Nav />
    </div>
  );
};

export default A;
