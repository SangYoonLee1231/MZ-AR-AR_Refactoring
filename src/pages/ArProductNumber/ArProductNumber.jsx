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

  useEffect(() => {
      console.log("photoUrl 변경됨:", photoUrl);
      window.localStorage.setItem("photo", photoUrl);
  }, [photoUrl]);

  // const fetchData = () => {
  //   const serverURL = process.env.REACT_APP_SERVER_URL;
  //   http://back.mzarar.kro.kr/api/products/9000;
  //   https://back.mzarar.kro.kr/api

  //   fetch(` ${serverURL}/products/${productNum}`)
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log(
  //           "API 요청에 성공했습니다. 응답 상태 코드:",
  //           response.status
  //         );
  //         return response.blob();
  //       } else {
  //         console.log(
  //           "API 요청이 실패했습니다. 응답 상태 코드:",
  //           response.status
  //         );
  //         throw new Error("Request failed");
  //       }
  //     })
  //     .then((blobData) => {
  //       console.log(blobData);
  //       // Blob 데이터를 URL로 변환하여 이미지를 표시합니다.
  //       const imageUrl = URL.createObjectURL(blobData);
  //       setImageURL(imageUrl);
  //     })
  //     .catch((error) => {
  //       console.error("API Error:", error);
  //     });
  // };

  const fetchData = async () => {
    const serverURL = process.env.REACT_APP_SERVER;
    const username = "사용자 이름"; // 사용자 이름 또는 번호

    try {
      const response = await axios.get(`${serverURL}products/${productNum}`, {
        params: {
          phoneNumber: username,
        },
      });

      if (response.status === 200) {
        setPhotoUrl(response.data); // 해당 photoUrl은 useEffect에서 추적하여 반영 예정
      } else if (response.status === 404) {
        // 응답이 404인 경우 처리
        setPhotoUrl(null);
      }
    } catch (error) {
      console.error("에러코드:", error);
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
      //
      // console.log(productNum);
      fetchData();
      // localStorage.setItem("product-image-url", photoUrl);

      //
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        //ar캠으로 이동하기
        history("/b");
      }, 500); //0.8초 후 토스트 메시지를 숨기고 이동
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
