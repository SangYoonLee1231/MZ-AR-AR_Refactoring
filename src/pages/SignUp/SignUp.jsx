import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import './SignUp.scss';
import Header from '../../components/header.jsx';
//import { PhoneUsername } from "../LogIn_noMember/LogIn_noMember";
import { getPhoneUsernameValue } from "../LogIn_noMember/LogIn_noMember";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

//닉네임 중복 허용으로 기획 사항을 수정한 것에 맞춰, 불필요해진 함수 삭제!

function SignUp() {
    //useState를 생성한다
    const [NameUsername, setUsername] = useState('');
    let [isValid, setValid] = useState('');
    const SERVER = process.env.REACT_APP_SERVER; //서버 사용을 위해 변수 추가
    const location = useLocation();
    //변수 받아오려고 추가해봤음
    //const this_phone = LogIn_noMember.PhoneUsernameValue; //이렇게 쓰면 전화번호가 undefined 나오고
    //const this_phone = PhoneUsernameValue; //이렇게 쓰면 전화번호가 없음 그냥...
    const phoneUsernameValue = window.localStorage.getItem('phone-username');

    //토스트 메시지를 띄우기 위한 설정~
    const [showToast, setShowToast] = useState(false);
    const [showToast_verify, setShowToast_verify] = useState(false);
    const [showToast_verify_wrong, setShowToast_verify_wrong] = useState(false);
    const history = useNavigate();


    //username의 변화를 감시하여 isValid를 설정
    useEffect(() => {
        if (NameUsername === '') {
            setValid('False');
            setShowToast_verify(false);
            setShowToast_verify_wrong(false);
        }
    }, [NameUsername]);

    //post 요청을 보내는 함수
    const sendToServer = async (phoneNumber, nickname) => {
        try {
            const response = await axios.post(`${SERVER}/users/signup`, null, {
                params: {
                    phoneNumber: phoneNumber,
                    nickname: nickname,
                }
            });

            console.log('api 응답값:', response.data);


            if (response.status === 404) {
                return null;
            } else {
                const { phoneNumber, nickname } = response.data;
                console.log('등록된 전화번호:', phoneNumber);
                console.log('등록된 닉네임:', nickname);
                history(-2);
            }
        } catch (error) {
            console.log('1번 지점');
            console.error('에러코드:', error);
        }
    };

    // useEffect(() => {
    //     console.log(`전화번호 입력 화면에서의 PhoneUsername: ${PhoneUsername}`);
    //     console.log(`전화번호 입력 화면에서의 NameUsername: ${NameUsername}`);
    // }, []);

    //전화번호 업데이트
    const LogIn_id = (e) => {
        setUsername(e.target.value);
    };

    const verifyUser = () => {
        if (NameUsername !== '기니피그') {
            setShowToast_verify(true);
            setShowToast_verify_wrong(false);
            setValid('True');
        }
        else if (NameUsername === '') {
            setShowToast_verify(false);
            setShowToast_verify_wrong(false);
            setValid('False');
        }
        else {
            setShowToast_verify(false);
            setShowToast_verify_wrong(true);
            setValid('False');
        }
    }

    //전화번호가 입력되었을 때 로그인 버튼이 활성화되도록 만듦!
    const handleLogIn = () => {
        if (NameUsername !== '' && isValid === 'True') {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                console.log('전화번호:', phoneUsernameValue);
                console.log('닉네임:', NameUsername);
                sendToServer(phoneUsernameValue, NameUsername); //서버로 전화번호와 닉네임을 전송
                //이전 화면으로 이동
                history(-3);
            }, 500); //0.5초 후 토스트 메시지를 숨기고 이동
        } else {
            alert('전화번호를 입력하려무나');
        }
    };

    const isButtonDisabled = NameUsername === '' || isValid === '' || isValid === 'False';

    return (
        <div>
            <Header />
            <div className="vertical-center-lineUp">
                <h1 href="#" style={{ textDecoration: 'none', fontSize: '30px', fontWeight: 'bold' }}>닉네임을 입력해주세요</h1>
                <div className="SizedBox_ver2"></div>
                <a href="#" style={{ color: 'gray', textDecoration: 'none' }}>처음 오셨네요!</a>
                <a href="#" style={{ color: 'gray', textDecoration: 'none' }}>환상의 AR 세계로 가는 마지막 단계에요!</a>
                <div className="SizedBox_ver1"></div>

                <input
                    type="text"
                    value={NameUsername}
                    onChange={LogIn_id}
                    style={{ width: '300px', height: '40px' }}
                    placeholder="닉네임 입력"
                    className="input"
                />
                <div className="SizedBox_ver2"></div>
                <div className="horizDIV">
                    <button className="verify-button" onClick={() => {
                        verifyUser();
                    }}>
                        <a>중복 검사</a>
                    </button>
                    <div className="SizedBox_ver2"></div>
                    {showToast_verify && <div className="toast">사용 가능한 닉네임입니다!</div>}
                    {showToast_verify_wrong && <div className="toast">사용 불가능한 닉네임입니다!</div>}
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
        </div>
    );
}

export default SignUp;
