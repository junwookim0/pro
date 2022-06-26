import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

// import required modules
import { Pagination, Navigation , Autoplay} from "swiper";

const Carousel = () => {
    const [setSwiperRef] = useState(null);
    return (
        <div>
            <h2 className="Carousel_text">인기글</h2>
            <div className="contents_swiper">
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: "fraction",
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[ Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="../../images/frontImg1.jpg" alt="notice_board_img"/></SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                <h2 className="Carousel_text">내가 좋아요 누른 사람들</h2>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                    type: "fraction",
                    }}
                    autoplay={{
                        delay: 3600,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                <h2 className="Carousel_text">신규글</h2>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                    type: "fraction",
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Carousel;
