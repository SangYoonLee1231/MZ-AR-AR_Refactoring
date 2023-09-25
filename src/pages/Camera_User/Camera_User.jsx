import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import './Camera_User.scss';
import DraggableDiv from '../DraggableDiv.jsx';

//이 파일은 사용자가 타투 도안을 직접 선택해서 AR 카메라로 사용할 수 있도록 기존 camera의 image 부분을 파일로 바꾼 코드임~

const Camera_User = () => {
    const webcamRef = useRef(null);
    const [circlePosition, setCirclePosition] = useState({ x: 50, y: 50 });
    const [circleSize, setCircleSize] = useState(50);
    const [rotationAngle, setRotationAngle] = useState(0);
    const [uploadedImage, setUploadedImage] = useState(null); //업로드된 이미지 상태임!

    useEffect(() => {
        // async 작업을 처리하기 위한 내부 함수
        const fetchCameraStream = async () => {
            if (webcamRef.current) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    webcamRef.current.srcObject = stream;
                } catch (error) {
                    console.error('카메라 열기 실패:', error);
                }
            }
        };

        fetchCameraStream();
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
                <button className="button-style" id="backButton">다시 촬영하기</button>
                <button className="button-style" id="goToNextButton">다음 단계로 이동</button>
            </body>
            </html>
        `);

            var backButton = newWindow.document.getElementById("backButton");
            backButton.addEventListener("click", () => {
                newWindow.close(); //새 창을 닫고
                window.focus(); //원래 창으로 포커스를 돌려줌
            });

            var goToNextButton = newWindow.document.getElementById("goToNextButton");
            goToNextButton.addEventListener("click", () => {
                newWindow.close();
                window.focus(); //원래 창으로 포커스를 돌리고
                //다음 화면으로 이동
                window.location.href = '/k';
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

    //이미지를 업로드하는 함수
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; //첫 번째 파일 선택
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target.result); //업로드한 이미지를 상태에 저장
            };
            reader.readAsDataURL(file);
        }
    };

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
            <a>AR 이미지를 자유롭게 활용하여 독특한 포즈를 취해주세요.</a>
            <a>하단의 버튼을 눌러 크기와 각도를 조절하고 캡쳐하실 수 있습니다.</a>
            <a>AR 이미지를 드래그하여 원하는 곳에 위치시킬 수도 있습니다.</a>
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
                        {/* 업로드한 이미지가 있는 경우 표시, 없으면 기본 이미지! 나중에는 '이미지를 업로드해주세요'가 적힌 이미지를 기본으로 넣든지... 수정할 것*/}
                        {uploadedImage ? (
                            <img
                                src={uploadedImage}
                                alt="My Image"
                                className="overlay-image"
                                style={{
                                    transform: `scale(${circleSize / 100}) rotate(${rotationAngle}deg)`,
                                }}
                            />
                        ) : (
                            <img
                                src="/images/images-2.jpg" //기본 이미지 경로는 여기서 설정
                                alt="My Image"
                                className="overlay-image"
                                style={{
                                    transform: `scale(${circleSize / 100}) rotate(${rotationAngle}deg)`,
                                }}
                            />
                        )}
                    </DraggableDiv>
                    <div className="overlay-button">
                        <label className="camera-button-style"> {/*얘는 왜 버튼 디자인이 다른지 모르겠음...*/}
                            <a className="custom-image-button-style">사진 선택</a>
                            {/* 이미지 업로드를 위한 파일 입력 요소 */}
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageUpload}
                            />
                        </label>
                        <div className="SizedBox"></div>
                        <button
                            className="move-button left camera-button-style"
                            onClick={() => moveCircle('left')}
                        >
                            이미지 축소
                        </button>
                        <div className="SizedBox"></div>

                        <button
                            className="move-button right camera-button-style"
                            onClick={() => moveCircle('right')}
                        >
                            이미지 확대
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
            <button onClick={capture} className="camera-button-style">
                사진 찍기
            </button>
        </div>
    );
};

export default Camera_User;