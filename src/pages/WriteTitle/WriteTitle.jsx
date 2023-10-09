import React, { useRef, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useNavigate,
} from "react-router-dom";
import Header from "../../components/header.jsx";

import "./WriteTitle.scss";

function WriteTitle() {
  const [username, setUsername] = useState("");

  const [showToast, setShowToast] = useState(false);
  const history = useNavigate();

  const LogIn_id = (e) => {
    setUsername(e.target.value);
  };
  const handleLogIn = () => {
    if (username !== "") {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        //contest 페이지로 이동하기
        history("/i");
      }, 500); //0.8초 후 토스트 메시지를 숨기고 이동
    } else {
      alert("사진에 제목이 등록되었습니다!");
    }
  };

  //입력 시 버튼이 활성화되게 하기 위한 변수
  const isButtonDisabled = username === "";

  return (
    <div className="vertical-center-lineUp">
      <Header />
      <div className="SizedBox_ver1"></div>
      <span className="bold">사진의 어울리는 제목을 입력해주세요.</span>
      <div className="SizedBox_ver2"></div>
      <span>여러분의 창의력을 뽑내도 좋아요!</span>
      <div className="SizedBox_ver2"></div>
      <div className="SizedBox_ver2"></div>
      <div className="input-area">
        <input
          type="text"
          value={username}
          onChange={LogIn_id}
          style={{ width: "250px", height: "40px" }}
          placeholder="사진의 제목을 입력하세요."
        />

        <button
          className="title-button-style"
          onClick={handleLogIn}
          disabled={isButtonDisabled}
        >
          <a>입력 완료</a>
        </button>
      </div>
      <div className="SizedBox_ver2"></div>
      <div className="SizedBox_ver2"></div>
      <span>사회의 미풍양속을 해치지 않는 제목을 입력해주세요.</span>
      <div className="SizedBox_ver2"></div>
      <span>성희롱 또는 기타 불쾌감을 조성하는 제목을 사용할 경우</span>
      <div className="SizedBox_ver2"></div>
      <span>민령사상 책임을 물을 수 있습니다.</span>
      <div className="SizedBox_ver2"></div>
      {showToast && <div className="toast">사진에 제목이 등록되었습니다!</div>}
    </div>
  );
}

export default WriteTitle;
