import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import Header from '../../components/header.jsx';

import './WriteTitle.scss';

function WriteTitle() {

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
                //contest 페이지로 이동하기
                history('/i');
            }, 500); //0.8초 후 토스트 메시지를 숨기고 이동
        } else {
            alert('사진에 제목이 등록되었습니다!');
        }
    };

    //입력 시 버튼이 활성화되게 하기 위한 변수
    const isButtonDisabled = username === '';

    return (
        <div className="vertical-center-lineUp">

            <Header />
            <div className="SizedBox_ver1"></div>
            <a>사진의 제목을 입력해주세요.</a>
            <div className="SizedBox_ver2"></div>
            <input
                type="text"
                value={username}
                onChange={LogIn_id}
                style={{ width: '300px', height: '40px' }}
                placeholder="사진의 제목을 입력하세요."
            />

            <div className="SizedBox_ver2"></div>

            <button className="title-button-style" onClick={handleLogIn} disabled={isButtonDisabled}>

                <a>완료</a>

            </button>
            <div className="SizedBox_ver2"></div>
            <a>사회의 미풍양속을 해치지 않는 제목을 입력해주세요.</a>
            <div className="SizedBox_ver2"></div>
            {showToast && <div className="toast">사진에 제목이 등록되었습니다!</div>}
        </div>
    );
}

export default WriteTitle;
