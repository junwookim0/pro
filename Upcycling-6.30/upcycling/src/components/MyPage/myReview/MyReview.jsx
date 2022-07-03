import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './MyReview.css';

import { useContext } from "react";
import AuthContext from '../../context/AuthContext'

// import required modules
import {EffectCoverflow, Pagination, Navigation , Autoplay} from "swiper";
import { useNavigate } from 'react-router-dom';
import CommentList from './CommentList';



const MyReview = ({reviewRepository}) => {
    const [setSwiperRef] = useState(null);
    const navigate = useNavigate()

    //🍎user정보
    const { user } = useContext(AuthContext);
    const userId = user.uid;

    //🍎전체리뷰
    const [reviews, setReviews] = useState([])
    const [onReviews, setOnReviews] = useState([])

    //🍎review /like
    const [myReviews, setMyReviews] = useState([])
    const [myLikes, setMyLikes] = useState([])
    const [myComments, setMyComments] = useState([])

    //🍎정렬까지 완료된 리뷰들
    const [onMyReviews,setOnMyReviews] = useState([])
    const [onMyLikes,setOnMyLikes] = useState([])
    const [onMyComments, setOnMyComments] = useState([])


    //🍎게시물 이동
    const goDetail = (review) => {
        navigate(`/reviews/${review.id}`, {state : {review}})
    }


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
    },[reviews,reviewRepository])
    
    // 🍎📃firebase에 저장된 myReview받아오기(내가 작성한 리뷰)
    useEffect(()=> {
        const stopSync =  reviewRepository.syncMyReviewsById(reviews => {
            setMyReviews(reviews);
        }, userId)
        return () => stopSync()
    },[userId, reviewRepository])

    // //🍎받아온 reviews를 value값만 가져오기 - 최신순 정렬
    useEffect(()=> {
        let reviewArray = Object.values(myReviews)
        let orderedReview =  reviewArray.slice().sort((a,b) => b.reviewDate.localeCompare(a.reviewDate))
        setOnMyReviews(orderedReview)
    },[myReviews,reviewRepository])



    //🍎👍firebase에 저장된 myLikes받아오기(내가 좋아요한 리뷰들)
    useEffect(()=> {
        const stopSync =  reviewRepository.syncMyLikeById(reviews => {
            setMyLikes(reviews);
        },userId)
        return () => stopSync()
    },[userId, reviewRepository])

    //🍎받아온 Likes를 value값만 가져오기 - 최신순 정렬
    useEffect(()=> {
        let reviewArray = Object.values(myLikes)
        setOnMyLikes(reviewArray)
    },[myLikes,reviewRepository])


    //🍎✏️firebase에 저장된 myComments받아오기(내가 작성한 리뷰들)
    useEffect(()=> {
        const stopSync =  reviewRepository.syncMyCommentsById(comments => {
            setMyComments(comments);
        },userId)
        return () => stopSync()
    },[userId, reviewRepository])

    //🍎받아온 Comments를 value값만 가져오기 - 최신순 정렬
    useEffect(()=> {
        let reviewArray = Object.values(myComments)
        let orderedReview =  reviewArray.slice().sort((a,b) => b.date.localeCompare(a.date))
        setOnMyComments(orderedReview)
    },[myComments])



    return (
        <section className="myReview">
            <div className='my_review_titleBox'>   
                <h2 className='my_review_title'>내가 작성한 리뷰글</h2>
            </div>
        {onMyReviews.length !== 0? (<div className="contents_swiper">
            <Swiper
                onSwiper={setSwiperRef}
                centeredSlides={true}
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
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                    {
                    onMyReviews && onMyReviews.map(review => {
                        return <SwiperSlide key={review.id}>
                            <section className='my_review_container'>
                                <img className='my_review_reviewImg' src={review.reviewIMG} alt="review"
                                    onClick={()=>{
                                        navigate(`/reviews/${review.id}`, {state : {review}})
                                    }}
                                />
                                <h3 className='my_review_title'>{review.reviewTitle}</h3>
                                <p className='my_review_name'>{review.nickname}</p>
                                <p className='my_review_email'>({review.email})</p>
                                <div className='my_review_likeBox'>
                                    <div className='my_review_icon'>
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <p className='my_review_amount'>{
                                    review.likes === undefined ? (0) : (Object.keys(review.likes).length)
                                    }</p>
                                </div>
                            </section>
                        </SwiperSlide>})
                    }
            </Swiper>

        </div>):(
            <div className="contents_empty">
            <h3>작성한 게시물이 없습니다. 지금바로 당신의 생각을 공유해주세요!</h3>
        </div>)}
        

        <div className='my_review_titleBox'>   
                <h2 className='my_review_title'>내가 '&#9829;좋아요'한 리뷰글</h2>
            </div>
        {onMyLikes.length !== 0? (<div className="contents_swiper">
            <Swiper
                onSwiper={setSwiperRef}
                centeredSlides={true}
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
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                    {
                    onMyLikes && onMyLikes.map(like => (
                        onReviews.map(review => {
                            if(review.id === like.id) {
                                {
                                    return <SwiperSlide key={review.id}>
                                        <section className='my_review_container'>
                                            <img className='my_review_reviewImg' src={review.reviewIMG} alt="review"
                                                onClick={()=>{
                                                    navigate(`/reviews/${review.id}`, {state : {review}})
                                                }}
                                            />
                                            <h3 className='my_review_title'>{review.reviewTitle}</h3>
                                            <p className='my_review_name'>{review.nickname}</p>
                                            <p className='my_review_email'>({review.email})</p>
                                            <div className='my_review_likeBox'>
                                                <div className='my_review_icon'>
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                                <p className='my_review_amount'>{
                                                review.likes === undefined ? (0) : (Object.keys(review.likes).length)
                                                }</p>
                                            </div>
                                        </section>
                                    </SwiperSlide>
                                }
                            }
                        })
                    ))
                    }
            </Swiper>

        </div>):(
            <div className="contents_empty">
            <h3>게시글에서 ❤를 클릭하고 마이페이지에서 보관하세요!</h3>
        </div>)}
        {onMyComments && (<CommentList onReviews={onReviews} onMyComments={onMyComments}/>)}
        </section>
    );
}

export default MyReview;