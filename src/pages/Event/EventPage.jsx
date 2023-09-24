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
      <h1>여기는 이벤트 페이지 !!</h1>
      <Nav />
    </div>
  );
};

export default event;