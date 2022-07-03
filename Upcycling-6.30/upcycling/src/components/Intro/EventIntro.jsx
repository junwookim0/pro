// 이벤트 소개 페이지
import Nav from '../Nav/Nav';
import SubMainBanner from '../banner/SubMainBannerEvent';
//react-grid-gallery npm 사용
import Gallery from 'react-grid-gallery';
import "./EventIntro.css";

const EventIntro = () => {
    const IMAGES =
    [
        {
            src: "../../images/event4.PNG",
            thumbnail: "../../images/event4.PNG",
        },
        {
            src: "../../images/event5.jpg",
            thumbnail: "../../images/event5.jpg",
        },
        {
            src: "../../images/event1.PNG",
            thumbnail: "../../images/event1.PNG",
        },
        {
            src: "../../images/event2.PNG",
            thumbnail: "../../images/event2.PNG",
        },
        {
            src: "../../images/event3.PNG",
            thumbnail: "../../images/event3.PNG",
        },
        {
            src: "../../images/event6.jpg",
            thumbnail: "../../images/event6.jpg",
        },
        {
            src: "../../images/event7.jpg",
            thumbnail: "../../images/event7.jpg",
        },
        {
            src: "../../images/event8.jpg",
            thumbnail: "../../images/event8.jpg",
        },
        {
            src: "../../images/event9.jpg",
            thumbnail: "../../images/event9.jpg",
        },
    ]

    return (
        <div className='Event_box'>
            <Nav/>
            <SubMainBanner/>
            <div id='EventImg_size'>
                <h1 className='Event_box_h1'> 진행중인 이벤트 </h1>
                <Gallery images={IMAGES}/>
            </div>
        </div>
    );
};
export default EventIntro;
