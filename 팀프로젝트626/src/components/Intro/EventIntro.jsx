// 이벤트 소개 페이지
import Nav from '../Nav/Nav';
import './EventIntro.css';
import Modalimg from '../modal/modalimg';
import { useState } from 'react';
import SubMainBanner from '../banner/SubMainBannerEvent';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Zoom, Pagination, Navigation} from "swiper";

const EventIntro = () => {
    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div>
            <Nav/>
            <SubMainBanner/>
            <div className="post">
                <h1>Upcycling EVENT</h1>
                <div className='post_img'>
                    <img src='../../../images/event1.PNG' className='eventpost' alt='eventIMG' onClick={openModal}/>
                    <img src='../../../images/event2.PNG' className='eventpost' alt='eventIMG' onClick={openModal}></img>
                    <img src='../../../images/event3.PNG' className='eventpost' alt='eventIMG' onClick={openModal}></img>
                    <img src='../../../images/event4.PNG' className='eventpost' alt='eventIMG' onClick={openModal}></img>
                </div>
                <Modalimg open={modalOpen} close={closeModal} header="EVENT 보기">
                <Swiper
                        style={{
                        "--swiper-navigation-color": "#ccc",
                        "--swiper-pagination-color": "#ccc",
                        }}
                        zoom={true}
                        navigation={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Zoom, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img src='../../../images/event1.PNG'className='eventModal'  alt='eventIMG'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img src='../../../images/event2.PNG' className='eventModal' alt='eventIMG'/> 
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img src='../../../images/event3.PNG' className='eventModal' alt='eventIMG'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img src='../../../images/event4.PNG' className='eventModal' alt='eventIMG'/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Modalimg>
            </div>


        </div>
    );
};
export default EventIntro;
