import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarouselReview.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

import { firestore } from "../../firebase";
import { query, collection, orderBy, onSnapshot, limit } from "firebase/firestore";

const CarouselDeal = ( ) => {
    const [setSwiperRef] = useState(null);
    const navigate = useNavigate()

  /* 🥑 파이어스토어에 저장돼 있는 deals 게시글 정보 */
    const [deals, setDeals] = useState([]);
    // 🥑 렌더링 시 콜백 함수 실행
    useEffect(() => {
        // dbDeals 콜렉션 레퍼런스 가져옴
        // 생성 일자 내림차순(최근 순서)으로 정렬
        const dq = query(
        collection(firestore, "dbDeals"),
        orderBy("createdAt", "desc"), limit(6)
        );
        // 수정, 삭제 실시간 반영
        // snapshot -> 각각의 docs에 접근하기 위해서 사용
        onSnapshot(dq, (snapshot) => {
        const dealArray = snapshot.docs.map(doc => ({
        // 각각의 객체에 고유 id를 만들어 할당
            id: doc.id, ...doc.data()
        }));
        // 거래글 객체 리스트를 setDeals에 할당
            setDeals(dealArray);
        })
    }, []);

    return (
        <section>
            <div className="contents_swiper">
                <h2 className="Carousel_text">신규 마켓</h2>
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
                        deals.map(deal => {
                            return <SwiperSlide key={deal.id}>
                                <section className='home_review_container'>
                                    <img className='home_review_reviewImg' src={deal.attachmentUrl} alt="review"
                                        onClick={()=>{
                                            navigate(`/deals/${deal.createdAt}`, {state : {deal}})
                                        }}
                                    />
                                    <h3 className='home_review_title'>{deal.title}</h3>
                                    <p className='home_review_name'>{deal.creatorName}</p>
                                    <div className='home_review_likeBox'>
                                        <div className='home_review_icon'>
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                        <p className='home_review_amount'>{deal.likeCount}</p>
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

export default CarouselDeal;
