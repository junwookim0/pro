import { useState, useEffect, useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation} from "swiper";

import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { firestore } from "../../../firebase";
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";

import styles from "./dCommonCSS.module.css";

import DNoneDeal from "./dNoneDeal";
import DNoneLike from "./dNoneLike";

const MyDeal = () => {
    
    const [setSwiperRef] = useState(null);
    const navigate = useNavigate();
    
    // user 정보
    const { user } = useContext(AuthContext);
    // deals /내가 쓴 거
    const [myDeals, setMyDeals] = useState([]);
    // deals /내가 좋아요 한 거
    const [myLikeDeals, setMyLikeDeals] = useState([]);

    // deals /내가 쓴 거
    useEffect(() => {
        const mydq = query(
            collection(firestore, "dbDeals"),
            where("creatorId", "==", user.uid),
            orderBy("createdAt", "desc")
        );

        onSnapshot(mydq, (snapshot) => {
            const myDealArray = snapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            }));
            setMyDeals(myDealArray);
        });
    }, []);
    // deals /내가 좋아요 한 거 
    useEffect(() => {
        const myldq = query(
            collection(firestore, "dbDeals"),
            where("likeUser", "array-contains", user.uid),
            orderBy("createdAt", "desc")
        );

        onSnapshot(myldq, (snapshot) => {
            const myLikeDealsArray = snapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            }));
            setMyLikeDeals(myLikeDealsArray);
        });
    }, []); 

    /* 사용 함수 */
    const onClick = (deal)=> {
        navigate(`/deals/${deal.createdAt}`,{state : {deal}})
    }

    return (
        <section className={styles.myReview}>
            <div className={styles.my_review_titleBox}>
                <h2 className={styles.my_review_title}>내가 작성한 게시글</h2>
            </div>
            {myDeals.length != 0 ? (
                <div className="contents_swiper">
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
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                        {myDeals.map(myd => (
                            <SwiperSlide key={myd.createdAt}>
                                <img 
                                onClick={() => onClick(myd)}
                                src={myd.attachmentUrl} alt="내 거래글 이미지" />
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            ) : (
                <DNoneDeal />
            )
        }

        <div className={styles.my_review_titleBox}>
            <h2 className={styles.my_review_title}>내가 ❤ 누른 게시글</h2>
        </div>
        {
            myLikeDeals.length != 0 ? (
                <div className="contents_swiper">
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
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {myLikeDeals.map(myld => (
                            <SwiperSlide key={myld.createdAt}>
                                <img 
                                onClick={() => onClick(myld)}
                                src={myld.attachmentUrl} alt="내 거래글 이미지" />
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            ) : (
                <DNoneLike />
            )
        }
        </section>
    );
}

export default MyDeal;