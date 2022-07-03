import ReviewItem from './reviewItem';
import styles from './CSS/reviewPage.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../Nav/Nav';
import SubMainBanner from '../banner/SubMainBannerReviews';

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Search from './Search';


import { useSelector, useDispatch } from "react-redux";
import { storeKeyword } from './searchSlice'
import WriteButton from './writeButton';


//🍎전체 Review를 보여주는 페이지

const ReviewPage = ({reviewRepository}) => {
    const dispatch = useDispatch();
    const keyword = useSelector((state)=>state.search.keyword);

    const [reviews, setReviews] = useState([])
    const [onReviews,setOnReviews] = useState([])

    const { user } = useContext(AuthContext);
    const userId = user.uid


    const [filteredReveiws, setFilteredReviews] = useState([])


    //🍎firebase에 저장된 review받아오기
    useEffect(()=> {
        const stopSync =  reviewRepository.syncReviews(reviews => {
            setReviews(reviews);
        })
        return () => stopSync();
    },[userId, reviewRepository])


    //🍎받아온 reviews를 value값만 가져오기 - 최신순 정렬
    useEffect(()=> {
        let reviewArray = Object.values(reviews)
        let orderedReview =  reviewArray.slice().sort((a,b) => b.reviewDate.localeCompare(a.reviewDate))
        setOnReviews(orderedReview)
    },[reviews])

    //🍎해시태그 검색
const onSearch = (text)=> {
    dispatch(storeKeyword(text))

    let hasTextArray  = onReviews.filter(item=>item.reviewHashtags.includes(text))
    setFilteredReviews(hasTextArray)
    
}

const renderKeyword = (keyword) => {
    return <h1 className={styles.result}>'{keyword}'(이)가 검색되었습니다.</h1>
}

useEffect(()=>{
    let hasTextArray  = onReviews.filter(item=>item.reviewHashtags.includes(keyword))
    setFilteredReviews(hasTextArray)
},[onReviews])


    return (
        <section>
            <Nav/>
            <SubMainBanner/>
            <div className={styles.reviewPage}>
                <div className={styles.header}>
                    <Search onSearch={onSearch}/>
                    <WriteButton/>
                </div>
                {keyword && renderKeyword(keyword)}
                <ul className={styles.list}>
                    {!keyword ?
                        (onReviews.map(review => (
                        <li key={review.id}
                        className={styles.list_item}
                        >
                            <ReviewItem  keyword={keyword} review={review}/>
                        </li>))) : (filteredReveiws.map(review => (
                            <li key={review.id}
                        className={styles.list_item}
                        >         
                            <ReviewItem keyword={keyword} review={review}/>
                        </li>
                        )))
                    }
                </ul>
            </div>
        </section>
    );
};

export default ReviewPage;