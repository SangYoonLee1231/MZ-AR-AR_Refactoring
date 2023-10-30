import React, { useRef, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useNavigate,
} from "react-router-dom";
import Header from "../../components/header.jsx";
import axios from "axios";

import "./ArProductNumber.scss";

function ArProductNumber() {
  // API 통신
  const [photoUrl, setPhotoUrl] = useState(null);
  const [productNum, setProductNum] = useState(0);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    if (photoUrl !== null) {
      console.log("photoUrl 변경됨:", photoUrl);
      window.localStorage.setItem("photo", photoUrl);
      setShowToast(true);  // 토스트 메시지를 보여줍니다.
      setTimeout(() => {
        setShowToast(false);  // 0.5초 후 토스트 메시지를 숨깁니다.
        setShouldNavigate(true);  // 페이지 이동을 허용합니다.
      }, 500);
    }
  }, [photoUrl]);
  
  useEffect(() => {
    if (shouldNavigate) {
      history("/camera");  // 페이지 이동
    }
  }, [shouldNavigate]);

  const fetchData = async () => {
    const serverURL = process.env.REACT_APP_SERVER;
    const username = "사용자 이름"; // 사용자 이름 또는 번호

    try {
      const response = await axios.get(`${serverURL}/products/${productNum}`, {
        params: {
          phoneNumber: username,
        },
      });

      if (response.status === 200) {
        setPhotoUrl(response.data.image); // 해당 photoUrl은 useEffect에서 추적하여 반영 예정
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // 404 에러를 여기에서도 처리 가능합니다.
        alert("해당 제품이 존재하지 않습니다");
      } else {
        console.error("에러코드:", error);
      }
      setPhotoUrl(null); // 에러 발생 시 photoUrl을 null로 설정
    }
  };

  const [showToast, setShowToast] = useState(false);
  const history = useNavigate();

  const LogIn_id = (e) => {
    setProductNum(e.target.value);
  };
  const handleLogIn = () => {
    if (productNum !== "") {
      fetchData();
    } else {
      alert("정확한 제품번호를 입력해주세요!");
    }
  };

  //입력 시 버튼이 활성화되게 하기 위한 변수
  const isButtonDisabled = productNum === "";

  return (
    <div className="vertical-center-lineUp">
      <Header />
      <div className="SizedBox_ver1"></div>
      <span>매장 직원의 도움을 받아</span>
      <br />
      <span>AR 적용을 원하는 모델의 제품 번호를 입력하세요</span>
      <div className="SizedBox_ver2"></div>
      <div className="input-box">
        <input
          type="text"
          value={productNum}
          onChange={LogIn_id}
          style={{ width: "250px", height: "40px" }}
          placeholder="제품번호를 입력하세요"
        />
        <button
          className="ProductNumber-button-style"
          onClick={handleLogIn}
          disabled={isButtonDisabled}
        >
          <a>완료</a>
        </button>
      </div>
      <div className="SizedBox_ver2"></div>
      {showToast && <div className="toast">제품번호가 확인되었습니다!</div>}
    </div>
  );
}

export default ArProductNumber;
