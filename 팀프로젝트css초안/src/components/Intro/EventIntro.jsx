// 이벤트 소개 페이지
import Nav from '../Nav/Nav';
import './EventIntro.css';


const EventIntro = () => {
    
    return (
        <div>
            <Nav/>
            <div className="post">
                <img src='../../../images/event1.PNG' alt="eventpost"></img>
                <img src='../../../images/event2.PNG' alt="eventpost"></img>
                <img src='../../../images/event3.PNG' alt="eventpost"></img>
                <img src='../../../images/event4.PNG' alt="eventpost"></img>
            </div>
        </div>
    );
};
export default EventIntro;
