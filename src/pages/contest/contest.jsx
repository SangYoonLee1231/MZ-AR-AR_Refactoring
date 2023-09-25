import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Nav from '../../components/Nav.jsx';
import "./contest.scss";
import LikeButton from './LikeButton.jsx';

const contest = () => {
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
                <h1>기발하고 독특한 사진에게 좋아요를 눌러보세요.</h1>
                <div className="SizedBox"></div>

                <Link to="/d">
                    <button className="button-style">
                        <a>홈으로 돌아가기</a>
                    </button>
                </Link>

                <div className="SizedBox"></div>

                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => {
                        return (
                            <div className="horiz-center">
                                <div className="ad-style">
                                    <div className="center">
                                        <img
                                            src="/images/home.svg"
                                            alt="home"
                                        />
                                        <a>작성자: 기니피그</a>
                                        <a>제목: 배고파</a>
                                        <div className="SizedBox"></div>
                                        <LikeButton />
                                    </div>
                                </div>
                                <div className="SizedBox"></div>
                                <div className="ad-style">
                                    <div className="center">
                                        <img
                                            src="/images/home.svg"
                                            alt="home"
                                        />
                                        <a>작성자: 볼드모트</a>
                                        <a>제목: 해리야 해리야</a>
                                        <div className="SizedBox"></div>
                                        <LikeButton />
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </div>
            <Nav />
        </div>
    );
};

export default contest;