import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Component } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <div className="header-style">
            <img
                src="/images/lottelogo.svg"
                alt="LotteLogo"
                className="responsive-image"
            />
            <div className="bunddang">
                <img
                    src="/images/bunddang.svg"
                    alt="bunddangAR"
                    className="responsive-image"
                />
            </div>
        </div>
    );
}

export default Header;