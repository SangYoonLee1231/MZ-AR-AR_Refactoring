import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import Header from '../../components/header.jsx';
import './LoginPage.scss';

function LogIn() {
  //아이디와 비밀번호를 각각의 상태로 관리하기 위해 두개의 useState를 생성한다
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //토스트 메시지를 띄우기 위한 설정~
  const [showToast, setShowToast] = useState(false);
  const history = useNavigate();

  //아이디 업데이트
  const LogIn_id = (e) => {
    setUsername(e.target.value);
  };

  //비밀번호 업데이트
  const LogIn_pw = (e) => {
    setPassword(e.target.value);
  };

  const LotteOnAlert = () => {
    alert('현재 지원되지 않는 서비스입니다. 게스트 로그인으로 시도하세요.');
  }

  const handleLogIn = () => {
    if (username !== '' && password !== '') {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        //이전 화면으로 이동
        history(-1);
      }, 500); //0.5초 후 이동
    } else {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
    }
  };


  //아이디와 비밀번호가 모두 입력 시 버튼이 활성화되게 하기 위한 변수
  const isButtonDisabled = username === '' || password === '';

  return (
    <div>
      <Header />
      <div className="vertical-center-lineUp">
        <div className="LpointDIV">
          <a>L.POINT 통합회원</a>
        </div>
        <div className="noticeDIV">
          <div>
            <img src="/images/megaphone.svg" alt="확성기" />
          </div>
          <div className="SizedBox_ver2"></div>
          <div className="columnDIV">
            <a>정식 서비스가 아니므로, 현재 L.POINT 통합 로그인이 제한됩니다.</a>
            <a>게스트 로그인으로 이용 바랍니다.</a>
          </div>
        </div>
        <div className="SizedBox_ver1"></div>

        <div style={{ position: 'relative' }}>
          <img
            src="/images/login_people.png"
            alt="아이콘"
            style={{ width: '20px', height: '20px', position: 'absolute', left: '10px', top: '10px' }}
          />
          <input
            type="text"
            value={username}
            onChange={LogIn_id}
            style={{
              width: '300px',
              height: '40px',
              paddingLeft: '40px'
            }}
            placeholder="아이디를 입력하세요."
            className="input"
          />
          <div className="SizedBox_ver2"></div>
          <img
            src="/images/closeButton.png"
            alt="아이콘"
            style={{ width: '20px', height: '20px', position: 'absolute', left: '270px', top: '10px' }}
          />

        </div>
        <div className="SizedBox_ver2"></div>

        <div style={{ position: 'relative' }}>
          <img
            src="/images/login_lock.png"
            alt="아이콘"
            style={{ width: '20px', height: '20px', position: 'absolute', left: '10px', top: '10px' }}
          />
          <input
            type="text"
            value={password}
            onChange={LogIn_pw}
            style={{
              width: '300px',
              height: '40px',
              paddingLeft: '40px'
            }}
            placeholder="비밀번호를 입력하세요."
            className="input"
          />
          <div className="SizedBox_ver2"></div>
          <img
            src="/images/closeButton.png"
            alt="아이콘"
            style={{ width: '20px', height: '20px', position: 'absolute', left: '270px', top: '10px' }}
          />
        </div>
        <div className="SizedBox_ver2"></div>
        <button className={`LoginPage-button-style  ${isButtonDisabled ? 'disabled-button' : ''}`}
          onClick={handleLogIn} disabled={isButtonDisabled}>

          <a>로그인</a>

        </button>
        <div className="SizedBox_ver2"></div>
        {showToast && <div className="toast">로그인되었습니다.</div>}
        <div className="SizedBox_ver2"></div>

        <div className="rowDIV">
          <div className="strokeDIV"></div>
          <div className="SizedBox_ver2"></div>
          <div>
            <a href="#" style={{ color: 'gray', textDecoration: 'none' }}>또는</a>
          </div>
          <div className="SizedBox_ver2"></div>
          <div className="strokeDIV"></div>
        </div>

        <button className="LotteOnLogin" onClick={LotteOnAlert}>
          <div className="rowDIV">
            <img
              src="/images/lotte_logo.png"
              alt="아이콘"
              style={{ width: '20px', height: '20px', marginRight: '15px' }}
            />
            <a>롯데 온으로 로그인</a>
          </div>
        </button>
        <div className="SizedBox_ver2"></div>
        <Link to="/login-no-member">
          <button className="GuestLogin">
            <a>게스트 로그인</a>
          </button>
        </Link>
        <div className="SizedBox_ver2"></div>
      </div>
    </div>
  );
}

export default LogIn;
