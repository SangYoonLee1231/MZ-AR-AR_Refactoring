import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';

import './ArProductNumber.scss';

function ArProductNumber() {

    const [username, setUsername] = useState('');

    const [showToast, setShowToast] = useState(false);
    const history = useNavigate();

    const LogIn_id = (e) => {
        setUsername(e.target.value);
    };
    const handleLogIn = () => {
        if (username !== '') {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                //ar캠으로 이동하기
                history('/b');
            }, 500); //0.8초 후 토스트 메시지를 숨기고 이동
        } else {
            alert('정확한 제품번호를 입력해주세요!');
        }
    };

    //입력 시 버튼이 활성화되게 하기 위한 변수
    const isButtonDisabled = username === '';

    return (
        <div className="vertical-center-lineUp">

            <div>
                <img
                    src="/images/lottelogo.svg"
                    alt="LotteLogo"
                />
            </div>
            <div className="SizedBox_ver1"></div>
            <a>제품번호를 입력해주세요.</a>
            <input
                type="text"
                value={username}
                onChange={LogIn_id}
                style={{ width: '300px', height: '40px' }}
                placeholder="아이디를 입력하세요."
            />

            <button className="login-button-style" onClick={handleLogIn} disabled={isButtonDisabled}>

                <a style={{ color: 'red' }}>완료</a>

            </button>
            <div className="SizedBox_ver2"></div>
            {showToast && <div className="toast">제품번호가 확인되었습니다!</div>}
        </div>
    );
}

export default ArProductNumber;
