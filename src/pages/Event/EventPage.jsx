import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import "./EventPage.scss";
import Header from "../../components/header.jsx";
import axios from 'axios';

const Event = () => {
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // 로딩 상태를 관리하는 상태 변수

  useEffect(() => {
    const fetchData = async () => {
      try {
        const SERVER = process.env.REACT_APP_SERVER;
        const response = await axios.get(`${SERVER}/event-banners`);
        const data = response.data.map(item => [item.image, item.routingUrl]);
        setEventList(data);
      } catch (error) {
        console.error('데이터를 불러오는 데 실패했습니다:', error);
      } finally {
        setIsLoading(false);  // 데이터 불러오기 완료
      }

    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="center">
        <div className="event-page-phrase">
          <span>분당점만의</span>
          <span>이벤트들을 모아봤어요!</span>
        </div>
        <div className="SizedBox"></div>

        <button className="game-button">
          <a href="https://www.lotteshopping.com/store/main?cstrCd=0008">
            분당점 공식 사이트로 이동하기
          </a>
        </button>

        <div className="SizedBox"></div>
        <div className="SizedBox"></div>

        {isLoading ? (
          <div>이벤트를 로딩 중입니다.<br/>잠시만 기다려주세요!</div>  // 로딩 중일 때의 UI
        ) : (
          eventList.map((eventInfo, index) => {
            return (
              <div key={index} className="ad-this-style">
                <img src={`data:image/png;base64,${eventInfo[0]}`} className="image-thumbnail" />
              </div>
            );
          })
        )}
      </div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <div className="SizedBox"></div>
      <Nav />
    </div>
  );
};

export default Event;
