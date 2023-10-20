import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Camera.scss";

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("/images/images-2.jpg");
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState(100); // 슬라이더로 조절할 이미지 크기, 퍼센트 단위
  const [divSize, setDivSize] = useState(50); // div 크기를 조절하기 위한 상태
  const [rotation, setRotation] = useState(0); // 이미지 회전 각도
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //   const [capturedImgSrc, setCapturedImgSrc] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // 웹캠 설정
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      const video = videoRef.current;
      video.srcObject = stream;
      // play() 함수가 Promise를 반환하기 때문에 then() 또는 await을 사용
      video.play().then(() => {
        console.log("Video played successfully");
      }).catch((error) => {
        console.error("Failed to play video: ", error);
      });
    });
  }, [windowWidth]);

  useEffect(() => {
    const photoSrc = window.localStorage.getItem("photo");
    if (photoSrc) {
      setImgSrc(`data:image/png;base64,${photoSrc}`);
    } else {
      // 이미지가 없으면 기본 이미지로 설정
      setImgSrc("/images/images-2.jpg");
    }
    const imgElement = document.querySelector("img");
    if (imgElement) {
      imgElement.src = imgSrc;
    }
  }, []);

  useEffect(() => {});

  const handleMouseDown = (e) => {
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    const offsetX = clientX - imgPos.x;
    const offsetY = clientY - imgPos.y;

    const handleMouseMove = (e) => {
      const moveX = e.clientX || e.touches[0].clientX;
      const moveY = e.clientY || e.touches[0].clientY;

      let newPosX = moveX - offsetX;
      let newPosY = moveY - offsetY;

      const videoElement = videoRef.current;
      const videoWidth = videoElement.offsetWidth;
      const videoHeight = videoElement.offsetHeight;

      const divElement = document.querySelector(".image-div");
      const divWidth = divElement.offsetWidth; // 변경된 부분: div의 크기를 가져옵니다.
      const divHeight = divElement.offsetHeight; // 변경된 부분: div의 크기를 가져옵니다.

      newPosX = Math.min(Math.max(0, newPosX), videoWidth - divWidth); // 변경된 부분: div의 크기를 이용합니다.
      newPosY = Math.min(Math.max(0, newPosY), videoHeight - divHeight); // 변경된 부분: div의 크기를 이용합니다.

      setImgPos({
        x: newPosX,
        y: newPosY,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
  };

  // 이미지 크기를 변경할 때의 로직
  const handleImageSizeChange = (e) => {
    const newSize = e.target.value;
    const videoElement = videoRef.current;
    const videoWidth = videoElement.offsetWidth;
    const videoHeight = videoElement.offsetHeight;

    const divElement = document.querySelector(".image-div");
    const divWidth = divElement.offsetWidth * (newSize / 100);
    const divHeight = divElement.offsetHeight * (newSize / 100);

    let newX = imgPos.x;
    let newY = imgPos.y;

    // div가 웹캠 영역을 벗어나는지 확인하고, 벗어난다면 영역 안으로 재조정
    if (imgPos.x + divWidth > videoWidth) {
      newX = videoWidth - divWidth;
    }
    if (imgPos.y + divHeight > videoHeight) {
      newY = videoHeight - divHeight;
    }

    setImgPos({ x: newX, y: newY });
    setDivSize(newSize);  // 상태 업데이트
  };


  const capture = () => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext("2d");

    // 웹캠 캡처
    ctx.drawImage(videoElement, 0, 0, videoElement.width, videoElement.height);

    // 이미지 로드 및 캡처
    const img = new Image();
    const imgWidth = imageRef.current.clientWidth;
    const imgHeight = imageRef.current.clientHeight;
    // img.src = "/images/images-2.jpg";
    img.src = imgSrc;
    img.onload = () => {
      // 이미지 회전과 위치 조절
      ctx.save();
      ctx.translate(
        imgPos.x + (imgWidth) / 200,
        imgPos.y - 40 + (imgHeight) / 200
      );
      ctx.rotate(rotation * (Math.PI / 180));
      ctx.drawImage(
        img,
        -((imgWidth) / 200),
        -((imgHeight) / 200),
        imgWidth,
        imgHeight
      );
      ctx.restore();

      // // 캡처된 이미지를 새 창에 띄우기
      // const dataURL = canvasElement.toDataURL('image/png');
      // window.open(dataURL, '_blank');
      // 캡처된 이미지를 새 창에 띄우기 대신 페이지에 삽입
      const dataURL = canvasElement.toDataURL("image/png");
      // const imgTag = document.createElement("img");
      // imgTag.src = dataURL;
      // document.body.appendChild(imgTag);

      const stream = videoElement.srcObject;
      const tracks = stream.getTracks();
      
      tracks.forEach((track) => {
        track.stop();
      });

      videoElement.srcObject = null;

      window.localStorage.setItem("captured-img-src", dataURL);
      history("/will-you-post");
    };
  };

  return (
    <div className="camera-body"  style={{ overflow: "hidden" }}>
      <video
        ref={videoRef}
        className="camera-video"
        width={windowWidth}
        height={Math.floor(windowWidth * (3 / 4))}
        autoPlay
      ></video>
      <canvas
        ref={canvasRef}
        className="camera-canvas"
        width={windowWidth}
        height={Math.floor(windowWidth * (3 / 4))}
        style={{ display: "none" }}
      ></canvas>
      <div
        className="image-div"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        style={{
          position: "absolute",
          top: imgPos.y,
          left: imgPos.x,
          cursor: "grab",
          transform: `rotate(${rotation}deg)`,
          width: `${divSize}%`,
        }}
      >
        <img ref={imageRef} src={imgSrc} width={`${imgSize}%`} />
      </div>
      <div className="camera-div">
        <button
          className="camera-button"
          onClick={() => setRotation(rotation + 15)}
        >
          시계 회전
        </button>
        <button
          className="camera-button"
          onClick={() => setRotation(rotation - 15)}
        >
          반시계 회전
        </button>
      </div>
      <div className="camera-div">
        <input
          className="camera-input"
          type="range"
          min="40"
          max="60"
          value={divSize}
          onChange={handleImageSizeChange}
        />
      </div>
      <button className="camera-capture-button" onClick={capture}>
        캡처
      </button>
    </div>
  );
}

export default Camera;
