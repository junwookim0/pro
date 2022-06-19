// 이벤트 소개 페이지
import React from 'react';
import {useState} from 'react';
import Nav from '../Nav/Nav';
import './EventIntro.css';
import {NavLink} from "react-router-dom";


const EventIntro = () => {
   
    


    return (
        <div>
            <Nav/>
            <div className="post">
                
                <h1>Upcycling EVENT</h1>

                <img src='../../../images/event1.PNG' className='eventpost' />
            
                {/*클릭하면 원본 모달창(아래 링크 참고)
                https://prod.velog.io/@wannabeing/%EB%AA%A8%EB%8B%AC%EC%B0%BD-HTML-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%81%B4%EB%A6%AD-%EC%8B%9C-%EC%9B%90%EB%B3%B8-%ED%81%AC%EA%B8%B0%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B3%B4%EA%B8%B0
                */}
                <div className='eventmodal'>
                    <button className="eventmodalclose">X</button>
                    <img src='../../../images/event2.PNG' className='eventmodal_content' />
                </div>




                <img src='../../../images/event2.PNG' className='eventpost'></img>
                <img src='../../../images/event3.PNG' className='eventpost'></img>
                <img src='../../../images/event4.PNG' className='eventpost'></img>
            </div>


        </div>
    );
};
export default EventIntro;
