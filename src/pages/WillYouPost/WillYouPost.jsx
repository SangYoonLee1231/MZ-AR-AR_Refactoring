import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Nav from '../../components/Nav.jsx';
import "./WillYouPost.scss";
import Header from '../../components/header.jsx';

const WillYouPost = () => {
    return (
        <div>
            <Header />
            <div className="center">
                <div className="SizedBox"></div>
                <h1>사진을 공개로 게시하고,</h1>
                <h1>AR 트릭아트 사진 대전에 참가하시겠어요?</h1>
                <div className="SizedBox"></div>
                <h1>다른 사용자가 좋아요를 누를 수 있습니다.</h1>
                <h1>좋아요의 개수는 비공개입니다.</h1>
                <h1>많은 좋아요를 받은 사진의 게시자에게는 롯데백화점 상품권이 수여됩니다.</h1>
                <div className="SizedBox"></div>

                <Link to="/l">
                    <button className="button-style">
                        <a>네, 참가할래요.</a>
                    </button>
                </Link>
                <div className="SizedBox"></div>
                <Link to="/a">
                    <button className="button-style">
                        <a>아니요, 괜찮아요.</a>
                    </button>
                </Link>
            </div>
            <Nav />
        </div>
    );
};

export default WillYouPost;