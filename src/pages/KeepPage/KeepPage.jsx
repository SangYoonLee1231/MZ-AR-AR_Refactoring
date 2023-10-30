import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import Header from '../../components/header.jsx';

import './KeepPage.scss';

function KeepPage() {

    const [showToast, setShowToast] = useState(false);
    const history = useNavigate();

    return (
        <div className="vertical-center-lineUp">

            <Header />
            <div className="SizedBox_ver1"></div>
            <a>여기는 보관함 페이지</a>
            <div className="SizedBox_ver2"></div>
            <Link to="/m">
                <button>교환 페이지로 돌아가기</button>
            </Link>

        </div>
    );
}

export default KeepPage;
