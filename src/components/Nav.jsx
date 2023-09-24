import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const navigate = useNavigate(); // useNavigate를 사용해서 navigate 객체를 가져옵니다.

  const handleButtonClick = (path) => {
    navigate(path); // navigate 함수를 사용해서 경로를 변경합니다.
  };

  return (
    <div>
      <div className="Nav">
        <button className="childNav" onClick={() => handleButtonClick('/a')} style={{ fontSize: 20 }}>
          <img
            src="/images/home.svg"
            alt="home"
          />

          <div className="SizedBox"></div>
          <span style={{ fontWeight: 'bold' }}>홈</span>
        </button>

        <button className="childNav" onClick={() => handleButtonClick('/e')} style={{ fontSize: 20 }}>

          <img
            src="/images/present.svg"
            alt="present"
          />

          <div className="SizedBox"></div>
          <span style={{ fontWeight: 'bold' }}>이벤트</span>
        </button>

      </div>
      <button className="nav-button-style" onClick={() => handleButtonClick('/d')} style={{ fontSize: 20, color: 'red' }}>
        <img
          src="/images/camera.svg"
          alt="camera"
        />
      </button>
      <div className="AR">
        <a className="h2">AR</a>
      </div>
    </div>
  );
}

export default Nav;
