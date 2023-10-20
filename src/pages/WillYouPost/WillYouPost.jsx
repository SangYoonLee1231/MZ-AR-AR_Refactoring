import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate} from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import "./WillYouPost.scss";
import Header from "../../components/header.jsx";

const WillYouPost = () => {
  const history = useNavigate();
  const capturedImgUrl = window.localStorage.getItem("captured-img-src");

  const handleSave = () => {
    const a = document.createElement("a");
    a.href = capturedImgUrl;
    a.download = "MZARAR-captured-image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '공유하기',
        text: '이미지를 공유해보세요!',
        url: capturedImgUrl // 또는 다른 공유하려는 URL
      }).then(() => {
        console.log('공유 성공');
      }).catch((error) => {
        console.log('공유 실패', error);
      });
    } else {
      console.log('Web Share API를 지원하지 않습니다.');
    }
  };

  const handleParticipate = () => {
    const username = window.localStorage.getItem("name-username");
    if (username) {
      history("/write-title");
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <div>
      <Header />
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="body">
        <div className="captured-image-area">
          <div className="sized-box">
            <img src={`${capturedImgUrl}`} />
          </div>
        </div>

        <div className="SizedBox"></div>

        <div className="captured-image-button-area">
          <Link to="/camera">
            <div>재촬영</div>
          </Link>
          <div onClick={handleSave}>저장</div>
          <div onClick={handleShare}>공유</div>
        </div>

        <div className="SizedBox"></div>

        <div className="will-you-post-center">
          <div className="text-area">
            <div className="SizedBox"></div>
            <h1>
              <span className="bold title">사진을 출품해보세요!</span>
            </h1>
            <div className="SizedBox"></div>
            <h1>
              <span className="bold">
                AR 트릭아트 사진 대전에 참가하시겠어요?
              </span>
            </h1>
            <div className="SizedBox"></div>
            <h1>
              <span className="bold">좋아요 순위</span>에 따라{" "}
              <span className="bold">롯데백화점 상품권</span>을 수여합니다!
            </h1>
            <div className="SizedBox"></div>
            <h1>순위에 들지 못해도 괜찮아요!</h1>
            <h1>
              순위에 없어도 <span className="bold">추첨</span>에 따라 월간
              지급까지!
            </h1>
            <div className="SizedBox"></div>
          </div>

          <div className="button-area">
            <Link to="/write-title">
              <button className="button-style">
                <span>네. 참가할래요!</span>
              </button>
            </Link>
            <Link to="/main-page">
              <button className="button-style">
                <span>아니요. 괜찮아요.</span>
              </button>
            </Link>
            {/* <div className="SizedBox"></div> */}
          </div>
        </div>
      </div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <Nav />
    </div>
  );
};

export default WillYouPost;
