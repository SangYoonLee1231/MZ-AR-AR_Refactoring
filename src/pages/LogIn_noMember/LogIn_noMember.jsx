import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import './LogIn_noMember.scss';
import Header from '../../components/header.jsx';

function LogIn_noMember() {
    //useState를 생성한다
    const [username, setUsername] = useState('');

    //토스트 메시지를 띄우기 위한 설정~
    const [showToast, setShowToast] = useState(false);
    const history = useNavigate();

    //전화번호 업데이트
    const LogIn_id = (e) => {
        setUsername(e.target.value);
    };


    //전화번호가 입력되었을 때 로그인 버튼이 활성화되도록 만듦!
    const handleLogIn = () => {
        if (username !== '') {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                //이전 화면으로 이동
                history(-1);
            }, 500); //0.8초 후 토스트 메시지를 숨기고 이동
        } else {
            alert('전화번호를 입력하려무나');
        }
    };

    const isButtonDisabled = username === '';

    return (
        <div className="vertical-center-lineUp">

            <Header />
            <div className="SizedBox_ver1"></div>
            <a>본인의 전화번호를 입력해주세요.</a>
            <input
                type="text"
                value={username}
                onChange={LogIn_id}
                style={{ width: '300px', height: '40px' }}
                placeholder="전화번호를 입력하세요."
            />
            <div className="SizedBox_ver2"></div>
            <button className="LogIn_noMemberPage-button-style" onClick={handleLogIn} disabled={isButtonDisabled}>

                <a>로그인 완료!</a>

            </button>
            <div className="SizedBox_ver2"></div>
            {showToast && <div className="toast">비회원으로 로그인되었습니다!</div>}
        </div>
    );
}

export default LogIn_noMember;
