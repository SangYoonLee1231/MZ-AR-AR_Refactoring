import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import './SignUp.scss';
import Header from '../../components/header.jsx';

function LogIn_noMember() {
    //useState를 생성한다
    const [username, setUsername] = useState('');
    const [verify, setVerify] = useState('');
    let [isClicked, setClicked] = useState('');

    //토스트 메시지를 띄우기 위한 설정~
    const [showToast, setShowToast] = useState(false);
    const history = useNavigate();

    //전화번호 업데이트
    const LogIn_id = (e) => {
        setUsername(e.target.value);
    };

    const verifyNumber = (e) => {
        setVerify(e.target.value);
    }


    //전화번호가 입력되었을 때 로그인 버튼이 활성화되도록 만듦!
    const handleLogIn = () => {
        if (username !== '' && isClicked === 'True') {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                //이전 화면으로 이동
                history(-3);
            }, 500); //0.8초 후 토스트 메시지를 숨기고 이동
        } else {
            alert('전화번호를 입력하려무나');
        }
    };

    const isButtonDisabled = username === '' || isClicked === '';

    return (
        <div className="vertical-center-lineUp">

            <Header />
            <div className="SizedBox_ver2"></div>
            <h1 href="#" style={{ textDecoration: 'none', fontSize: '30px', fontWeight: 'bold' }}>닉네임을 입력해주세요</h1>
            <div className="SizedBox_ver2"></div>
            <a href="#" style={{ color: 'gray', textDecoration: 'none' }}>처음 오셨네요!</a>
            <a href="#" style={{ color: 'gray', textDecoration: 'none' }}>환상의 AR 세계로 가는 마지막 단계에요!</a>
            <div className="SizedBox_ver1"></div>

            <input
                type="text"
                value={username}
                onChange={LogIn_id}
                style={{ width: '300px', height: '40px' }}
                placeholder="닉네임 입력"
            />
            <div className="SizedBox_ver2"></div>
            <div className="horizDIV">
                <button className="verify-button" onClick={() => { setClicked("True") }}>
                    <a>중복확인</a>
                </button>

            </div>
            <div className="SizedBox_ver2"></div>
            <button
                className={`LogIn_noMemberPage-button-style ${isButtonDisabled ? 'disabled-button' : ''}`}
                onClick={handleLogIn}
                disabled={isButtonDisabled}
            >
                <a>닉네임 확정</a>
            </button>
            <div className="SizedBox_ver2"></div>
            {showToast && <div className="toast">닉네임이 생성되었습니다!</div>}
        </div>
    );
}

export default LogIn_noMember;
