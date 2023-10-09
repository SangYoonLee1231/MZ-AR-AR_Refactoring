import React, { useEffect, useRef, useState } from 'react';


function Camera() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
    const [imgSize, setImgSize] = useState(100); // 슬라이더로 조절할 이미지 크기, 퍼센트 단위
    const [rotation, setRotation] = useState(0); // 이미지 회전 각도

    useEffect(() => {
        // 웹캠 설정
        navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            const video = videoRef.current;
            video.srcObject = stream;
            video.play();
        });
    }, []);

    const handleMouseDown = (e) => {
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        const offsetX = clientX - imgPos.x;
        const offsetY = clientY - imgPos.y;
    
        const handleMouseMove = (e) => {
            const moveX = e.clientX || e.touches[0].clientX;
            const moveY = e.clientY || e.touches[0].clientY;
            console.log(`moveX: ${moveX}, moveY: ${moveY}`);  // 현재 위치 로깅
            setImgPos({
                x: moveX - offsetX,
                y: moveY - offsetY,
            });
        };
    
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleMouseMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleMouseMove);
        document.addEventListener('touchend', handleMouseUp);
    };

    const capture = () => {
        const videoElement = videoRef.current;
        const canvasElement = canvasRef.current;
        const ctx = canvasElement.getContext('2d');

        // 웹캠 캡처
        ctx.drawImage(videoElement, 0, 0, videoElement.width, videoElement.height);

        // 이미지 로드 및 캡처
        const img = new Image();
        img.src = '/images/images-2.jpg';
        img.onload = () => {
            // 이미지 회전과 위치 조절
            ctx.save();
            ctx.translate(imgPos.x + (img.width * imgSize / 200), imgPos.y + (img.height * imgSize / 200));
            ctx.rotate(rotation * (Math.PI / 180));
            ctx.drawImage(img, -(img.width * imgSize / 200), -(img.height * imgSize / 200), img.width * (imgSize / 100), img.height * (imgSize / 100));
            ctx.restore();

            // // 캡처된 이미지를 새 창에 띄우기
            // const dataURL = canvasElement.toDataURL('image/png');
            // window.open(dataURL, '_blank');
            // 캡처된 이미지를 새 창에 띄우기 대신 페이지에 삽입
            const dataURL = canvasElement.toDataURL('image/png');
            const imgTag = document.createElement('img');
            imgTag.src = dataURL;
            document.body.appendChild(imgTag);

        };
    };

    return (

        <>
        <video ref={videoRef} width="640" height="480" autoPlay></video>
        <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
        <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            style={{
                position: 'absolute',
                top: imgPos.y,
                left: imgPos.x,
                cursor: 'grab',
                transform: `rotate(${rotation}deg)`,
            }}
        >
            <img src="/images/images-2.jpg" width={`${imgSize}%`} />
        </div>
        <div>
            <button onClick={() => setRotation(rotation + 15)}>시계 회전</button>
            <button onClick={() => setRotation(rotation - 15)}>반시계 회전</button>
        </div>
        <div>
            <input type="range" min="10" max="200" value={imgSize} onChange={(e) => setImgSize(e.target.value)} />
        </div>
        <button onClick={capture}>캡처</button>
        </>
    );
}

export default Camera;
