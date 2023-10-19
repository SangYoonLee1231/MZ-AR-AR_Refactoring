import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  const navigate = useNavigate(); // useNavigate를 사용해서 navigate 객체를 가져옵니다.

  const handleButtonClick = (path) => {
    navigate(path); // navigate 함수를 사용해서 경로를 변경합니다.
  };

  return (
    <div>
      <div className="Nav">
        <button
          className="childNav"
          onClick={() => handleButtonClick("/main-page")}
          style={{justifyContent:"start", paddingLeft:"20px" }}
        >
          <img src="/images/home.svg" alt="home" />

          <div className="SizedBox" style={{width:"10px"}}></div>
          <span>Home</span>
        </button>

        <button
          className="childNav"
          onClick={() => handleButtonClick("/event-page")}
          style={{justifyContent:"end", paddingRight:"20px"  }}
        >
        <span>이벤트</span>
        <div className="SizedBox" style={{width:"10px"}}></div>
        <img src="/images/present.svg" alt="present" />

        </button>
      </div>
      <button
        className="nav-button-style"
        onClick={() => handleButtonClick("/ar-center-page")}
        style={{ fontSize: 20, color: "red" }}
      >
        <img src="/images/camera.svg" alt="camera" />
      </button>
      <div className="AR">
        <a className="h2">AR</a>
      </div>
    </div>
  );
}

export default Nav;
