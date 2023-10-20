import React from 'react';
import './Storytelling.scss';

function App() {
return (
    <main role="main" className="main-content" id="main-content">
        <div className="titleCont">
            {/* <h1 className="main-title" id="main-title">
            {'Here, in the forest,'}
            <br />
            <span style={{ paddingLeft: '100px' }}>{'dark and deep,'}</span>
            <br />
            <span style={{ paddingRight: '110px' }}>{'I offer you,'}</span>
            <br />
            <span style={{ paddingLeft: '-20px' }}>{'eternal sleep.'}</span>
            </h1> */}
            <h1 className="main-title" id="main-title">
            <br />
            {'베르테르 : 마법의 공간'}
            <br />
            <br />
            <span style={{ paddingLeft: '100px' }}>{'로테를 사랑한 베르테르,'}</span>
            <br />
            <span style={{ paddingRight: '110px' }}>{'사랑은 이루어지지 못했지만'}</span>
            <br />
            <span style={{ paddingLeft: '-20px' }}>{'그는 나지막히 말했어요'}</span>
            <br />
            <br />
            <br />
            <span style={{ paddingLeft: '-20px' }}>{'"당신을 다 만날 그 날을 위해'}</span>
            <br />
            <span style={{ paddingLeft: '150px' }}>{'로테여,'}</span>
            <br />
            <span style={{ paddingRight: '110px' }}>{'당신의 이름에 마법을 담아'}</span>
            <br />
            <span style={{ paddingLeft: '-20px' }}>{'이 로테(LOTTE)백화점에'}</span>
            <br />
            <span style={{ paddingLeft: '-20px' }}>{'환상의 공간을 심어놓겠소"'}</span>
            <br />
            <br />
            </h1>
        </div>
        <canvas id="noise" className="noise"></canvas>
        <div className="vignette"></div>
    </main>
    );
}

export default App;
