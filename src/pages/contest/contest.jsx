import React, { useState, useEffect } from "react"; // useState와 useEffect 추가
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import "./contest.scss";
import LikeButton from "./LikeButton.jsx";
import Header from "../../components/header.jsx";
import axios from "axios"; // axios 추가

const Contest = () => {
  const [posts, setPosts] = useState([]); // posts를 저장할 state
  const serverAddress = process.env.REACT_APP_SERVER; // .env에서 서버 주소 가져오기

  // 컴포넌트가 마운트되면 실행
  useEffect(() => {
    // API 요청 함수
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverAddress}posts`);
        setPosts(response.data); // API 응답을 state에 저장
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchData(); // 함수 실행
  }, []);

  return (
    <div>
      <Header />
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

        <div className="photo-list">
          {posts.map((post) => {
            // Blob 생성 및 URL 설정
            const blob = new Blob([post.image], { type: "image/png" });
            const imageUrl = URL.createObjectURL(blob);

            return (
              <div className="horiz-center">
                <div className="ad-style">
                  <div className="center">
                    <img
                      src={`data:image/png;base64,${post.image}`}
                      alt={post.title}
                    />
                    <a>작성자: {post.authorNickname}</a>
                    <a>제목: {post.title}</a>
                    <div className="SizedBox"></div>
                    <LikeButton />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="SizedBox"></div>
        <div className="SizedBox"></div>
        <div className="SizedBox"></div>
        <div className="SizedBox"></div>
        <div className="SizedBox"></div>
      </div>
      <Nav />
    </div>
  );
};

export default Contest;
