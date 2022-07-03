import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarouselReview.css";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";


// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CarouselReview = ({reviewRepository}) => {
    const [setSwiperRef] = useState(null);
    const navigate = useNavigate()
    //🍎user정보
    const { user } = useContext(AuthContext);
    const userId = user.uid;

    //🍎전체리뷰
    const [reviews, setReviews] = useState([])
    const [onReviews, setOnReviews] = useState([])


    //🍎게시물 삭제유무를 확인하기위한 firebase전체 리뷰
    useEffect(()=> {
        const stopSync =  reviewRepository.syncReviews(reviews => {
            setReviews(reviews);
        })
        return () => stopSync();
        },[userId, reviewRepository])

    useEffect(()=> {
        let reviewArray = Object.values(reviews)
        let orderedReview =  reviewArray.slice().sort((a,b) => b.reviewDate.localeCompare(a.reviewDate))
        setOnReviews(orderedReview)
    },[reviews])
    
    console.log(onReviews)
    

    return (
        <section>
            <div className="contents_swiper">
                <h2 className="Carousel_text">신규 리뷰</h2>
                <div className="contents_swiper">
                    
                <Swiper
                    onSwiper={setSwiperRef}
                    centeredSlides={false}
                    pagination={{
                    type: "fraction",
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1500: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }}
                    navigation={true}
                    modules={[ Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        onReviews && onReviews.map(review => {
                            return <SwiperSlide key={review.id}>
                                <section className='home_review_container'>
                                    <img className='home_review_reviewImg' src={review.reviewIMG} alt="review"
                                        onClick={()=>{
                                            navigate(`/reviews/${review.id}`, {state : {review}})
                                        }}
                                    />
                                    <h3 className='home_review_title'>{review.reviewTitle}</h3>
                                    <p className='home_review_name'>{review.nickname}</p>
                                    <p className='home_review_email'>({review.email})</p>
                                    <div className='home_review_likeBox'>
                                        <div className='home_review_icon'>
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                        <p className='home_review_amount'>{
                                        review.likes === undefined ?(0) : (Object.keys(review.likes).length)
                                        }</p>
                                    </div>
                                </section>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
                </div>
                
        </div>

        </section>
    );
}

export default CarouselReview;
