import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import Nav from '../../components/Nav.jsx';
import "./ExchangePage.scss";

const Exchange = () => {
    const [points, setPoints] = useState(100);
    const [toastMessage, setToastMessage] = useState(null);

    const decreasePoints = () => {
        if (points > 100) {
            setPoints(points - 100);
        }
    };

    const increasePoints = () => {
        setPoints(points + 100);
    };

    const exchangePoints = () => {
        if (points >= 100) {
            setPoints(points - 100); //포인트 차감

            //포인트가 7000 미만인 경우 성공 메시지 표시 후 이동
            if (points < 7000) {
                setToastMessage('성공적으로 교환되었습니다!');
                setTimeout(() => {
                    setToastMessage(null);
                    window.location.href = '/n';
                }, 800);
            } else {
                //포인트가 7000 이상인 경우 부족 메시지 표시 후 이동
                setToastMessage('현재 보유한 포인트가 부족합니다!');
                setTimeout(() => {
                    setToastMessage(null);
                    window.location.href = '/a';
                }, 800);
            }
        }
    };


    return (
        <div>
            <div className="header-style">
                <img
                    src="/images/lottelogo.svg"
                    alt="LotteLogo"
                />
                <div className="bunddang">
                    <img
                        src="/images/bunddang.svg"
                        alt="bunddangAR"
                    />
                </div>
            </div>
            <div className="center">
                <div className="SizedBox"></div>
                <div className="colored-div-style">

                    <div className="horiz-style">
                        <a className="big-font">홍길동</a>
                        <a className="middle-font">님의 현재 보유 포인트는</a>
                    </div>

                    <div className="horiz-style">
                        <a className="big-font">7000</a>
                        <a className="middle-font">포인트입니다.</a>
                    </div>

                    <div className="SizedBox"></div>

                    <a>B 사이트에서 게임을 플레이하여</a>
                    <a>포인트를 얻을 수 있습니다.</a>
                </div>

                <div className="SizedBox"></div>
                <h1>교환을 원하는 포인트 수량을 조절해주세요.</h1>
                <div className="SizedBox"></div>

                <div className="point-control">
                    <button onClick={decreasePoints}>-</button>
                    <span>{points} 포인트</span>
                    <button onClick={increasePoints}>+</button>
                </div>

                <div className="SizedBox"></div>

                <h1>교환 이후에는 포인트가 차감되고</h1>
                <h1>보관함에서 상품권을 확인하실 수 있습니다.</h1>
                <div className="SizedBox"></div>

                <button onClick={exchangePoints}>
                    상품권으로 교환하기
                </button>

                {toastMessage && (
                    <div className="toast">
                        {toastMessage}
                    </div>
                )}

                <div className="SizedBox"></div>

                <Link to="/n">
                    <button>
                        <a>내 보관함으로 이동하기</a>
                    </button>
                </Link>
            </div>
            <Nav />
        </div>
    );
};

export default Exchange;