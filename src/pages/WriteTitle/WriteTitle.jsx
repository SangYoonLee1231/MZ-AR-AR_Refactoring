import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
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
  const [capturedTitle, setCapturedTitle] = useState("");

  const [showToast, setShowToast] = useState(false);
  const history = useNavigate();
  const SERVER = process.env.REACT_APP_SERVER;

  const CapturedTitle_id = (e) => {
    setCapturedTitle(e.target.value);
  };

  const uploadPost = async () => {
    // 로컬 스토리지에서 이미지 데이터를 가져옵니다.
    const imageData = localStorage.getItem("captured-img-src");
    const NameUsername = localStorage.getItem("name-username");
  
    // Base64 인코딩된 이미지 데이터를 Blob 객체로 변환합니다.
    const imageBlob = await fetch(imageData).then((res) => res.blob());
  
    const formData = new FormData();
    formData.append("title", capturedTitle);
    formData.append("authorNickname", NameUsername);
    formData.append("image", imageBlob, "image.png");
  
    try {
      const response = await axios.post(`${SERVER}/posts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("성공적으로 게시물이 생성되었습니다.", response.data);
      history('/contest');
    } catch (error) {
      alert("게시물 생성에 실패했습니다.", error);
    }
  }

  // const handleLogIn = () => {

  //   window.localStorage.setItem("captured-title", capturedTitle);
    
    
  //   // if (username =="") {
  //   //   alert("제목이 입력되지 않았습니다.");
  //   //   alert("사진에 제목이 등록되었습니다!");
  //   // }

  //   // setShowToast(true);
  //   // setTimeout(() => {
  //   //   setShowToast(false);
  //   //   //contest 페이지로 이동하기
  //   //   history("/i");
  //   // }, 500); //0.8초 후 토스트 메시지를 숨기고 이동

  // };

  //입력 시 버튼이 활성화되게 하기 위한 변수
  const isButtonDisabled = capturedTitle === "";

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
          value={capturedTitle}
          onChange={CapturedTitle_id}
          style={{ width: "250px", height: "40px" }}
          placeholder="사진의 제목을 입력하세요."
        />

        <button
          className="title-button-style"
          onClick={uploadPost}
          disabled={isButtonDisabled}
        >
          <a>입력 완료</a>
        </button>
      </div>
      <div className="SizedBox_ver2"></div>
      <div className="SizedBox_ver2"></div>
      <span>미풍양속을 해치지 않는 제목을 입력해주세요.</span>
      <span>불쾌감을 조성하는 제목을 사용할 경우</span>
      <span>민형사상 책임을 물을 수 있습니다.</span>
      <div className="SizedBox_ver2"></div>
      {showToast && <div className="toast">사진에 제목이 등록되었습니다!</div>}
    </div>
  );
}

export default WriteTitle;
