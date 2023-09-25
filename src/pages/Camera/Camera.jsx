import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import './Camera.scss';
import DraggableDiv from '../DraggableDiv.jsx';

const Camera = () => {
    const webcamRef = useRef(null);
    const [circlePosition, setCirclePosition] = useState({ x: 50, y: 50 });
    const [circleSize, setCircleSize] = useState(50);
    const [rotationAngle, setRotationAngle] = useState(0); //살짝 회전해가면서 볼 수 있게 기능 추가

    useEffect(() => {
        if (webcamRef.current) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    webcamRef.current.srcObject = stream;
                })
                .catch((error) => {
                    console.error('카메라 열기 실패:', error);
                });
        }
    }, []);

    //사진을 촬영해서 새 창에 띄운다
    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();

        var newWindow = window.open("", "_blank");

        if (newWindow) {
            newWindow.document.write(`
            <html>
            <body>
                <img src="${imageSrc}" alt="이미지">
                <button id="backButton">다시 착용하기</button>
            
            </body>
            </html>
        `);

            var backButton = newWindow.document.getElementById("backButton");
            backButton.addEventListener("click", () => {
                newWindow.close(); //새 창을 닫고
                window.focus(); //원래 창으로 포커스를 돌려줌
            });


        } else {
            alert("팝업 창이 차단되었습니다. 브라우저 설정에서 팝업 차단을 해제해주세요.");
        }
    };

    const rotateLeft = () => {
        setRotationAngle((prevAngle) => prevAngle - 20);
    };

    const rotateRight = () => {
        setRotationAngle((prevAngle) => prevAngle + 20);
    };


    //작동 안함^^.. 그레서 일단 line과 circle 화면에서 삭제함
    const moveCircle = (direction) => {
        const stepSize = 5; //버튼 한번 클릭 시 5만큼 이동하게 함
        const lineStartX = 0; //선분의 시작 x 좌표
        const lineEndX = 300; //선분의 끝 x 좌표
        const circleWidth = circleSize; //원의 지름

        if (direction === 'left') {
            //원의 위치를 stepSize만큼 왼쪽으로 이동하되 선분의 왼쪽 끝을 넘어가지 않도록 제한
            const newX = Math.max(lineStartX + circleWidth / 2, circlePosition.x - stepSize);
            setCirclePosition((prevPosition) => ({
                ...prevPosition,
                x: newX,
            }));
            //원의 크기를 stepSize만큼 축소
            setCircleSize((prevSize) => Math.max(prevSize - stepSize, 20));
        } else if (direction === 'right') {
            //원의 위치를 stepSize만큼 오른쪽으로 이동하되 선분의 오른쪽 끝을 넘어가지 않도록 제한
            const newX = Math.min(lineEndX - circleWidth / 2, circlePosition.x + stepSize);
            setCirclePosition((prevPosition) => ({
                ...prevPosition,
                x: newX,
            }));
            //원의 크기를 stepSize만큼 증가
            setCircleSize((prevSize) => Math.min(prevSize + stepSize, 200));
        }
    };

    return (
        <div className="camera-container center">
            <div className="SizedBox"></div>
            <a>AR 이미지 아래에 착용하고자 하는 신체 부위를 위치하신 후 스타일을 확인하세요.</a>
            <a>하단의 버튼을 눌러 크기와 각도를 조절하고 캡쳐하실 수 있습니다.</a>
            <a>제품 이미지를 드래그하여 원하는 곳에 위치시킬 수도 있습니다.</a>
            <div className="SizedBox"></div>
            <div className="camera-wrapper">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="camera"
                />
                <div className="overlay">

                    <DraggableDiv>
                        <img
                            src="/images/images-2.jpg"
                            alt="My Image"
                            className="overlay-image"
                            style={{
                                transform: `scale(${circleSize / 100}) rotate(${rotationAngle}deg)`,
                            }}
                        />
                    </DraggableDiv>

                    <div className="overlay-button">

                        <button
                            className="move-button left camera-button-style"
                            onClick={() => moveCircle('left')}
                        >
                            제품 축소
                        </button>
                        <div className="SizedBox"></div>

                        <button
                            className="move-button right camera-button-style"
                            onClick={() => moveCircle('right')}
                        >
                            제품 확대
                        </button>
                        <div className="SizedBox"></div>
                        <button
                            className="move-button left camera-button-style"
                            onClick={rotateLeft}
                        >
                            왼쪽 회전
                        </button>
                        <div className="SizedBox"></div>
                        <button
                            className="move-button right camera-button-style"
                            onClick={rotateRight}
                        >
                            오른쪽 회전
                        </button>
                    </div>
                </div>
            </div>
            <div className="SizedBox"></div>
            <button onClick={capture} className="camera-button-style">사진 찍기</button>
        </div>
    );
};

export default Camera;