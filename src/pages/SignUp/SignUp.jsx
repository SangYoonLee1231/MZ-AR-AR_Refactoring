import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import './SignUp.scss';

function SignUp() {
    //아이디와 비밀번호를 각각의 상태로 관리하기 위해 두개의 useState를 생성한다
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //토스트 메시지를 띄우기 위한 설정~
    const [showToast, setShowToast] = useState(false);
    const history = useNavigate();

    //아이디 업데이트
    const SignUp_id = (e) => {
        setUsername(e.target.value);
    };

    //비밀번호 업데이트
    const SignUp_pw = (e) => {
        setPassword(e.target.value);
    };

    //아이디와 비밀번호가 모두 입력되었을 때 회원가입 버튼이 활성화되도록 만듦!
    const handleSignUp = () => {
        if (username !== '' && password !== '') {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                //이전 화면으로 이동
                history(-1);
            }, 500); //0.8초 후 토스트 메시지를 숨기고 이동
        } else {
            alert('아이디와 비밀번호를 모두 입력하려무나');
        }
    };

    //아이디와 비밀번호가 모두 입력 시 버튼이 활성화되게 하기 위한 변수
    const isButtonDisabled = username === '' || password === '';

    return (
        <div className="vertical-center-lineUp">

            <div>
                <img
                    src="/images/lottelogo.svg"
                    alt="LotteLogo"
                />
            </div>
            <div className="SizedBox_ver1"></div>
            <a>사용하실 아이디를 입력해주세요.</a>
            <input
                type="text"
                value={username}
                onChange={SignUp_id}
                style={{ width: '300px', height: '40px' }}
                placeholder="아이디를 입력하세요."
            />
            <div className="SizedBox_ver2"></div>
            <a>사용하실 비밀번호를 입력해주세요.</a>
            <input
                type="password"
                value={password}
                onChange={SignUp_pw}
                style={{ width: '300px', height: '40px' }}
                placeholder="비밀번호를 입력하세요."
            />
            <div className="SizedBox_ver2"></div>
            <button className="login-button-style" onClick={handleSignUp} disabled={isButtonDisabled}>

                <a style={{ color: 'red' }}>회원가입 완료!</a>

            </button>
            <div className="SizedBox_ver2"></div>
            {showToast && <div className="toast">회원가입되었습니다!</div>}
        </div>
    );
}

export default SignUp;