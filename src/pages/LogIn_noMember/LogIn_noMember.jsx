import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import './LogIn_noMember.scss';
import Header from '../../components/header.jsx';
import axios from 'axios';

//username을, 닉네임 생성 페이지로 넘겨줘서, 서버로 post하도록 api를 달아야 한다
let PhoneUsernameValue = '';

function LogIn_noMember() {
    //useState를 생성한다
    const [PhoneUsername, setUsername] = useState('');
    const [verify, setVerify] = useState('');
    let [isClicked, setClicked] = useState('');
    let [isValid, setValid] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(180); // 3분은 180초
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const SERVER = process.env.REACT_APP_SERVER;
    let verifyUserResponse = null; // 응답을 저장할 변수 선언


    //토스트 메시지를 띄우기 위한 설정~
    const [showToast, setShowToast] = useState(false);
    const [showToast_verify, setShowToast_verify] = useState(false);
    const [showToast_verify_wrong, setShowToast_verify_wrong] = useState(false);
    const [showToast_isSend, setShowToast_isSend] = useState(false);
    const history = useNavigate();

    //전화번호 업데이트
    const LogIn_id = (e) => {
        setUsername(e.target.value);
    };
    const verifyNumber = (e) => {
        setVerify(e.target.value);
    }



    //전화번호가 입력되었을 때 로그인 버튼이 활성화되도록 만듦!
    const handleLogIn = async () => {
        let response = null; //response 변수 선언
        console.log('여기는 handleLogIn 함수. 현재 입력된 전화번호는', PhoneUsername);
        if (PhoneUsername !== '' && verify !== '' && isClicked === 'True' && isValid === 'True') {
            setShowToast(true);
            setTimeout(async () => {
                setShowToast(false);
                try {
                    response = await verifyUser();
                    if (response) {
                        history(-2);
                    } else {
                        console.log('여기는 handleLogIn 함수. 현재 입력된 전화번호는', PhoneUsername);
                        history('/g');
                    }
                } catch (error) {
                    console.error('에러코드:', error);
                }
            }, 500);
        } else {
            alert('전화번호를 입력하려무나');
        }
    };

    //비동기 함수를 잘 써야한다. 함수의 응답을 기다려서 값을 받고, 비교하고, 이동해야 한다.
    //안그러면 초기값이랑 비교해서 페이지 이동 이상하게 됨
    const verifyUser = async () => {
        if (isClicked === 'True' && verify === '1102') {
            setShowToast_verify(true);
            setShowToast_verify_wrong(false);
            setValid('True');

            try {
                const response = await axios.post(`${SERVER}/users/login`, null, {
                    params: {
                        phoneNumber: PhoneUsername
                    }
                });

                console.log('api 응답값:', response.data);

                if (response.status === 404) {
                    //전화번호를 여기서 저장
                    //window.localStorage.setItem('phone-username', PhoneUsername);
                    PhoneUsernameValue = PhoneUsername; //전화번호를 저장
                    console.log('여기는 PhoneUsernameValue = PhoneUsername 부분. 현재 입력된 전화번호는', PhoneUsername);
                    //return null;
                } else if (response.status !== 404) {
                    //phoneNumber랑 nickname을 파싱해서 가져오자, contest 페이지로 넘겨주어야 한다.
                    const { phoneNumber, nickname } = response.data;
                    console.log('phoneNumber:', phoneNumber);
                    console.log('nickname:', nickname);
                    //비동기 처리가 완료된 후에 history 함수를 호출
                    history(-2); //페이지 이동
                }
            } catch (error) {
                console.error('에러코드:', error);
                //비동기 처리가 완료된 후에 history 함수를 호출
                history('/g'); //페이지 이동
            }
        } else {
            setShowToast_verify(false);
            setShowToast_verify_wrong(true);
            setValid('False');
        }
    };

    useEffect(() => {
        if (verify === '') {
            setValid('False');
            setShowToast_verify(false);
            setShowToast_verify_wrong(false);
        }
    }, [verify]);

    useEffect(() => {
        if (timeRemaining > 0) {
            const timer = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000); //1초마다 타이머를 갱신

            return () => clearTimeout(timer);
        }
    }, [timeRemaining]);


    const isButtonDisabled = PhoneUsername === '' || verify === '' || isClicked === '' || isValid === '' || isValid === 'False';

    return (
        <div>
            <Header />
            <div className="vertical-center-lineUp">
                <h1 href="#" style={{ textDecoration: 'none', fontSize: '30px', fontWeight: 'bold' }}>게스트 로그인</h1>
                <div className="SizedBox_ver2"></div>
                <a href="#" style={{ color: 'gray', textDecoration: 'none' }}>언제든지 L.POINT 계정에 연동이 가능합니다.</a>
                <div className="SizedBox_ver1"></div>

                <div className="columnDIV">
                    <div className="horizDIV">
                        <input
                            type="text"
                            value={PhoneUsername}
                            onChange={LogIn_id}
                            style={{ width: '300px', height: '40px' }}
                            placeholder="핸드폰 번호"
                            className="input"
                        />
                        <button className="verify-button" onClick={() => {
                            setClicked('True');
                            setShowToast_isSend('True');
                            setTimeRemaining(180); // 3분으로 다시 설정
                        }}>
                            <a>인증요청</a>
                        </button>
                    </div>
                    {showToast_isSend && (
                        <div className="toast">
                            {timeRemaining === 0 ? (
                                <a>다시 인증을 요청해주세요.</a>
                            ) : (
                                <>
                                    <a>인증번호가 전송되었습니다!</a>
                                    <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>
                                        {' '}
                                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                    </a>
                                </>
                            )}
                        </div>
                    )}
                    <div className="SizedBox_ver2"></div>
                    <div className="horizDIV">
                        <input
                            type="text"
                            value={verify}
                            onChange={verifyNumber}
                            style={{ width: '300px', height: '40px' }}
                            placeholder="인증번호를 입력하세요."
                            className="input"
                        />
                        <button className="verify-button" onClick={() => {

                            verifyUser();
                        }}>
                            <a>인증확인</a>
                        </button>
                    </div>
                    {showToast_verify && <div className="toast">인증되었습니다!</div>}
                    {showToast_verify_wrong && <div className="toast">인증에 실패하였습니다!</div>}
                </div>
                <div className="SizedBox_ver2"></div>
                <button
                    className={`LogIn_noMemberPage-button-style ${isButtonDisabled ? 'disabled-button' : ''}`}
                    onClick={handleLogIn}
                    disabled={isButtonDisabled}
                >
                    <a>게스트 로그인</a>
                </button>
                <div className="SizedBox_ver2"></div>
                {showToast && <div className="toast">비회원으로 로그인되었습니다!</div>}
            </div>
        </div>
    );
}

export function getPhoneUsernameValue() {
    return PhoneUsernameValue;
}
//export const PhoneUsername = '왜 자꾸 전달이 안되는거임?';
//export { PhoneUsernameValue };
export default LogIn_noMember;
