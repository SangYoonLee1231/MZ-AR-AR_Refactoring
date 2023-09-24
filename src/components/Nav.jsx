import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const history = useNavigate();

  const handleButtonClick = (path) => {
    history.push(path);
  };

  return (
    <div>
      <div className="Nav">
        <button className="childNav" onClick={() => handleButtonClick('/a')} style={{ fontSize: 20 }}>
          <img
            src="/home.png"
            alt="camera"
          />

          <div className="SizedBox"></div>
          <span style={{ fontWeight: 'bold' }}>홈</span>
        </button>

        <button className="childNav" onClick={() => handleButtonClick('/e')} style={{ fontSize: 20 }}>

          <img
            src="/present.png"
            alt="camera"
          />

          <div className="SizedBox"></div>
          <span style={{ fontWeight: 'bold' }}>이벤트</span>
        </button>

      </div>
      <button className="nav-button-style" onClick={() => handleButtonClick('/d')} style={{ fontSize: 20, color: 'red' }}>
        <img
          src="/image 1.png"
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