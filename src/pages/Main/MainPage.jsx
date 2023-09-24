import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './MainPage.scss';
import Nav from '../../components/Nav.jsx';
import LogIn from '../Login/LoginPage.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import Camera from '../Camera/Camera.jsx';
import Camera_User from '../Camera_User/Camera_User.jsx';
import LogIn_noMember from '../LogIn_noMember/LogIn_noMember.jsx';
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

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {
  return (
    <div>
      <div className="header-style">
        <img
          src="/logo.svg"
          alt="LotteLogo"
        />
        <div className="bunddang">
          <img
            src="/bunddangAR.svg"
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

const event = () => {
  return (
    <div>
      <h1>여기는 이벤트 페이지 !!</h1>
      <Nav />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/a" element={<Main />} />
          <Route path="/b" element={<Camera />} />
          <Route path="/c" element={<Camera_User />} />
          <Route path="/d" element={<A />} />
          <Route path="/e" element={<event />} />
          <Route path="/f" element={<LogIn />} />
          <Route path="/h" element={<LogIn_noMember />} />
          <Route path="/g" element={<SignUp />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
